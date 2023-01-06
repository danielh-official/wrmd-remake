<script setup lang="ts">

import {Link} from "@inertiajs/inertia-vue3";
import DonationButtonContent from "./DonationButton/DonationButtonContent.vue";

const classString = "inline-block px-6 py-2.5 bg-red-300 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out";

defineProps({
    link: {required: true, type: String}
});
</script>

<template>
    <a v-if="link === 'https://www.wrmd.org/donate'" target="_blank" :href="link"
       :class="classString">
        <DonationButtonContent></DonationButtonContent>
    </a>
    <Link v-else :href="link" :class="classString">
        <DonationButtonContent></DonationButtonContent>
    </Link>
</template>
