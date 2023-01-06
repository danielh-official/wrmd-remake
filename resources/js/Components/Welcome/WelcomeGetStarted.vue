<template>
    <div class="bg-white p-10 flex sm:flex-row flex-col" id="welcome-get-started">
        <div class="flex-initial mt-4 sm:mt-0 sm:w-1/2 flex-col flex space-y-3 sm:order-1 order-2">
            <p class="sm:text-4xl text-gray-400">A free on-line medical database designed specifically for wildlife
                rehabilitators to collect, manage and analyze data for our patients.</p>
            <p class="text-center">
                <PrimaryButton id="get-started-login-button" type="link" :href="route('login')" color="green">Get Started!</PrimaryButton>
            </p>
        </div>
        <div class="order-1 sm:order-2">
            <img src="https://www.wrmd.org/img/imac.png" alt="Wildlife Rehabilitation MD" class="w-[30rem]">
        </div>
    </div>
</template>
<script setup lang="ts">
import PrimaryButton from "../PrimaryButton.vue";</script>
