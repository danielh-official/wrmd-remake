<template>
    <div class="bg-gray-200 p-10 flex flex-col sm:flex-row space-x-3" id="welcome-info">
        <div class="sm:block sm:h-10 w-[7rem] sm:flex-auto hidden" v-html="logo"></div>
        <div class="text-sm text-gray-600 flex-auto sm:order-1 order-2">Wildlife Rehabilitation MD (WRMD) is a not-for-profit program
            serving
            over 1,000 wildlife rehabilitation
            organizations across 28 countries. It's free to use but not free for us to maintain. Fewer than 5% of
            our users have donated, but if everyone seeing this gave just $20 we would be set for 2023. Can You
            Help?
        </div>
        <div class="flex flex-col flex-initial space-y-3 basis-1/12 sm:order-2 order-1 mb-2 sm:mb-0 text-center">
            <PrimaryButton class="justify-center" target="_blank" :href="donateMonthlyUrl" color="green" id="monthly-donation-button">Give Monthly
            </PrimaryButton>
            <PrimaryButton class="justify-center" target="_blank" :href="donateNowUrl" color="green" id="donate-now-button">Give Now
            </PrimaryButton>
        </div>
    </div>
</template>
<script setup lang="ts">
import PrimaryButton from "../PrimaryButton.vue";

defineProps({
    donateMonthlyUrl: {required: true, type: String},
    donateNowUrl: {required: true, type: String},
    logo: {required: true, type: String}
});
</script>
