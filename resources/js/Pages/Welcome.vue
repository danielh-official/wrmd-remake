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
import TestimonialCard from "../Components/Welcome/TestimonialCard.vue";

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
        id="welcome-page"
        class="flex flex-col w-9/12 justify-center min-h-screen my-4">
        <WelcomeInfo class="mb-3" :logo="logo" :donate-now-url="config.custom.pages.donateNow"
                     :donate-monthly-url="config.custom.pages.donateMonthly"></WelcomeInfo>
        <WelcomeGetStarted></WelcomeGetStarted>
        <div class="mt-3 flex flex-col sm:flex-row sm:space-x-7 space-y-2 sm:space-y-0">
            <WelcomeBenefitsExplanation :feature-route="config.custom.pages.features"></WelcomeBenefitsExplanation>
            <TestimonialCard :testimonials-route="config.custom.pages.testimonials"></TestimonialCard>
        </div>
    </div>
</template>
