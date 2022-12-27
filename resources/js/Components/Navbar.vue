<script setup lang="ts">
import {JetstreamInterface, UserInterface} from "../interfaces";
import TeamsDropdown from "./Navbar/TeamsDropdown.vue";
import SettingsDropdown from "./Navbar/SettingsDropdown.vue";
import Hamburger from "./Navbar/Hamburger.vue";
import {ref} from "vue";
import ResponsiveNavigationMenu from "./Navbar/ResponsiveNavigationMenu.vue";
import ApplicationMark from "./ApplicationMark.vue";
import NavLink from "./NavLink.vue";
import { Link } from "@inertiajs/inertia-vue3";

const showingNavigationDropdown = ref(false);

defineProps({
    user: {type: Object as () => UserInterface | null, required: false},
    jetstream: {type: Object as () => JetstreamInterface, required: false}
});
</script>

<template>
    <nav class="bg-white border-b border-gray-100 dark:bg-gray-800">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <!-- Logo -->
                    <div class="shrink-0 flex items-center">
                        <Link :href="route('dashboard')">
                            <ApplicationMark class="block h-9 w-auto"/>
                        </Link>
                    </div>

                    <!-- Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <NavLink v-if="user" :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </NavLink>
                    </div>
                </div>

                <div class="hidden sm:flex sm:items-center sm:ml-6">
                    <div class="ml-3 relative">
                        <slot name="links"></slot>
                    </div>

                    <div v-if="user" class="ml-3 relative">
                        <!-- Teams Dropdown -->
                        <TeamsDropdown :user="user" :jetstream="jetstream"></TeamsDropdown>
                    </div>

                    <!-- Settings Dropdown -->
                    <div v-if="user" class="ml-3 relative">
                        <SettingsDropdown :jetstream="jetstream" :user="user"></SettingsDropdown>
                    </div>
                </div>

                <!-- Hamburger -->
                <div class="-mr-2 flex items-center sm:hidden">
                    <Hamburger @click="showingNavigationDropdown = $event"></Hamburger>
                </div>
            </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <ResponsiveNavigationMenu :user="user" :jetstream="jetstream" :showing-navigation-dropdown="showingNavigationDropdown"></ResponsiveNavigationMenu>
    </nav>
</template>
