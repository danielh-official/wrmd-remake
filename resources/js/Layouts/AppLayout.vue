<!--suppress ALL -->

<script setup lang="ts">
import {Inertia} from '@inertiajs/inertia';
import {Head} from '@inertiajs/inertia-vue3';
// @ts-ignore
import ApplicationMark from '@/Components/ApplicationMark.vue';
// @ts-ignore
import Banner from '@/Components/Banner.vue';
// @ts-ignore
import Dropdown from '@/Components/Dropdown.vue';
// @ts-ignore
import DropdownLink from '@/Components/DropdownLink.vue';
// @ts-ignore
import NavLink from '@/Components/NavLink.vue';
// @ts-ignore
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import {JetstreamInterface, UserInterface} from "../interfaces";
import Navbar from "../Components/Navbar.vue";

defineProps({
    title: {type: String, required: true},
    user: {type: Object as () => UserInterface, required: false},
    jetstream: {type: Object as () => JetstreamInterface, required: false}
});
</script>

<template>
    <div>
        <Head :title="title"/>

        <Banner/>

        <div class="min-h-screen bg-gray-100">
            <slot name="navbar" v-if="$slots.navbar"></slot>
            <Navbar v-else :jetstream="jetstream" :user="user"></Navbar>

            <!-- Page Heading -->
            <header v-if="$slots.header" class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header"/>
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <slot/>
            </main>
        </div>
    </div>
</template>
