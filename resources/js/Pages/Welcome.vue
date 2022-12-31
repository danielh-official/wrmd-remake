<script lang="ts">
import GuestLayout from "../Layouts/GuestLayout.vue";

export default {
    layout: GuestLayout
}
</script>

<script setup lang="ts">
import {Head, Link} from '@inertiajs/inertia-vue3';
import {ConfigInterface, UserInterface} from "../interfaces";
import PrimaryButton from "../Components/PrimaryButton.vue";
import WelcomeInfo from "../Components/Welcome/WelcomeInfo.vue";
import WelcomeGetStarted from "../Components/Welcome/WelcomeGetStarted.vue";
import WelcomeBenefitsExplanation from "../Components/Welcome/WelcomeBenefitsExplanation.vue";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    config: {required: true, type: Object as () => ConfigInterface},
    user: Object as () => UserInterface,
    demoPhoto: {required: true, type: String},
    logo: {required: true, type: String}
});
</script>

<template>
    <!--suppress HtmlRequiredTitleElement -->
    <Head title="Welcome"/>

    <div
        class="flex flex-col w-9/12 justify-center min-h-screen my-4">
        <WelcomeInfo :logo="logo" :donate-now-url="config.custom.pages.donateNow"
                     :donate-monthly-url="config.custom.pages.donateMonthly"></WelcomeInfo>
        <WelcomeGetStarted></WelcomeGetStarted>
        <div class="mt-3">
            <WelcomeBenefitsExplanation :feature-route="config.custom.pages.features"></WelcomeBenefitsExplanation>
        </div>
    </div>
</template>
