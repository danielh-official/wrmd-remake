<script setup>
import {Link} from "@inertiajs/inertia-vue3";
import BenefitsCarousel from "./WelcomeBenefitsExplanation/BenefitsCarousel.vue";

defineProps({
    featureRoute: {type: String, required: true}
});
</script>

<template>
    <div class="flex flex-col bg-blue-400 text-white p-4 h-48">

        <div class="text-3xl mb-8">How can Wildlife Rehabilitation <span
            class="text-xl">MD</span> benefit you?
        </div>

        <BenefitsCarousel></BenefitsCarousel>
    </div>


    <div class="flex bg-blue-500 text-white p-2 pl-5"><a href="https://www.wrmd.org/features" class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
             class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>

        <div class="ml-2">
            <a v-if="featureRoute === 'https://www.wrmd.org/features'" target="_blank" :href="featureRoute"
               class="hover:underline hover:text-gray-200">Learn more about WRMD's
                features</a>
            <Link v-else class="hover:underline hover:text-gray-200" :href="featureRoute">Learn more about WRMD's
                features
            </Link>
        </div>
    </a></div>
</template>
