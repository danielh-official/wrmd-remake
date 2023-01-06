<script setup lang="ts">
import {ConfigInterface, JetstreamInterface, UserInterface} from "../interfaces";
import TeamsDropdown from "./Navbar/TeamsDropdown.vue";
import SettingsDropdown from "./Navbar/SettingsDropdown.vue";
import Hamburger from "./Navbar/Hamburger.vue";
import {ref} from "vue";
import ResponsiveNavigationMenu from "./Navbar/ResponsiveNavigationMenu.vue";
import ApplicationMark from "./ApplicationMark.vue";
import NavLink from "./NavLink.vue";
import {Link} from "@inertiajs/inertia-vue3";
import DonationButton from "./DonationButton.vue";

const showingNavigationDropdown = ref(false);

const setShowingNavigationDropdown = (event: boolean) => {
    showingNavigationDropdown.value = event;
}

defineProps({
    user: {type: Object as () => UserInterface | null, required: false},
    jetstream: {type: Object as () => JetstreamInterface, required: false},
    logo: {type: String, required: true},
    config: {required: true, type: Object as () => ConfigInterface}
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
                        <Link :href="!user ? route('home') : route('dashboard')">
                            <ApplicationMark :logo="logo" class="block h-9 w-auto"/>
                        </Link>
                    </div>

                    <!-- Navigation Links -->
                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 lg:flex">
                        <NavLink v-if="user" :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </NavLink>
                    </div>
                </div>

                <div class="hidden md:flex sm:items-center sm:ml-6">
                    <div>
                        <DonationButton :link="config.custom.pages.makeADonation"></DonationButton>
                    </div>
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
                <div class="-mr-2 flex items-center md:hidden">
                    <Hamburger @update:modelValue="setShowingNavigationDropdown"
                               :model-value="showingNavigationDropdown"></Hamburger>
                </div>
            </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <ResponsiveNavigationMenu :config="config" :user="user" :jetstream="jetstream"
                                  :showing-navigation-dropdown="showingNavigationDropdown"></ResponsiveNavigationMenu>
    </nav>
</template>
