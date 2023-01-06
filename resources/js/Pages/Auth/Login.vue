<!--suppress TypeScriptCheckImport -->
<script setup lang="ts">
import {Head, useForm} from '@inertiajs/inertia-vue3';
// @ts-ignore
import AuthenticationCard from '../../Components/AuthenticationCard.vue';
// @ts-ignore
import AuthenticationCardLogo from '../../Components/AuthenticationCardLogo.vue';
// @ts-ignore
import Checkbox from '../../Components/Checkbox.vue';
// @ts-ignore
import InputError from '../../Components/InputError.vue';
// @ts-ignore
import InputLabel from '../../Components/InputLabel.vue';
// @ts-ignore
import PrimaryButton from '../../Components/PrimaryButton.vue';
// @ts-ignore
import TextInput from '../../Components/TextInput.vue';
import {ConfigInterface} from "../../interfaces";

defineProps({
    canResetPassword: Boolean,
    status: String,
    config: {type: Object as () => ConfigInterface, required: true}
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    // @ts-ignore
    const loginRoute = route('login');

    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(loginRoute, {
        onFinish: () => form.reset('password'),
    });
};
</script>

<script lang="ts">
import GuestLayout from "../../Layouts/GuestLayout.vue";

export default {
    layout: GuestLayout
}
</script>

<template>
    <!--suppress HtmlRequiredTitleElement -->
    <Head title="Sign In"/>

    <AuthenticationCard>
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <template v-slot:heading>
            Sign In
        </template>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email"/>
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autofocus
                    placeholder="Email"
                />
                <InputError class="mt-2" :message="form.errors.email"/>
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password"/>
                <TextInput
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="current-password"
                    placeholder="Password"
                />
                <InputError class="mt-2" :message="form.errors.password"/>
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.remember" name="remember"/>
                    <span class="ml-2 text-sm text-gray-600 dark:text-gray-300">Remember me</span>
                </label>
            </div>

            <div class="flex sm:flow-root items-center space-x-5 mt-4">
                <PrimaryButton color="green" class="ml-4" :class="{ 'opacity-25': form.processing }"
                               :disabled="form.processing">
                    Sign In!
                </PrimaryButton>

                <PrimaryButton color="red" v-if="canResetPassword" :href="config.custom.pages.forgotPassword"
                               class="float-right">
                    Forgot My Password?
                </PrimaryButton>
            </div>
        </form>

        <template v-slot:footer-heading>
            Need an account?
        </template>

        <template v-slot:footer>
            <p class="mb-3">
                Before signing into Wildlife Rehabilitation <span class="text-xs">MD</span>, your organization first
                needs to create a <span class="uppercase">free</span> account.
            </p>
            <PrimaryButton :href="config.custom.pages.register" color="green">
                Register Your Organization
            </PrimaryButton>
        </template>
    </AuthenticationCard>
</template>
