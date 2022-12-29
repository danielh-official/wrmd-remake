<script lang="ts">
import GuestLayout from "../Layouts/GuestLayout.vue";

export default {
    layout: GuestLayout
}
</script>

<script setup lang="ts">
import {Head, Link} from '@inertiajs/inertia-vue3';
import {ConfigInterface, UserInterface} from "../interfaces";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    config: {required: true, type: Object as () => ConfigInterface},
    user: Object as () => UserInterface
});
</script>

<template>
    <!--suppress HtmlRequiredTitleElement -->
    <Head title="Welcome"/>

    <div
        class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div v-if="canLogin" class="fixed top-0 right-0 px-6 py-4 sm:block">
            <Link v-if="user" :href="route('dashboard')"
                  class="text-sm text-gray-700 dark:text-gray-500 underline">Dashboard
            </Link>
        </div>
    </div>
</template>
