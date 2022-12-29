<script setup lang="ts">
import {ConfigInterface, JetstreamInterface, UserInterface} from "../../interfaces";
import ResponsiveNavLink from "../ResponsiveNavLink.vue";
import {navbarLinks} from "../../Modules/links";
import DonationButton from "../DonationButton.vue";

const props = defineProps({
    showingNavigationDropdown: {required: true, type: Boolean},
    user: {required: false, type: Object as () => UserInterface | null},
    jetstream: {required: true, type: Object as () => JetstreamInterface},
    config: {required: true, type: Object as () => ConfigInterface}
});

const responsiveNavLinks = navbarLinks(props)
</script>
<template>
    <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink v-if="user" :href="route('dashboard')" :active="route().current('dashboard')">
                Dashboard
            </ResponsiveNavLink>

            <div class="text-center">
                <DonationButton :link="config.custom.pages.makeADonation"></DonationButton>
            </div>

            <ResponsiveNavLink v-for="link in responsiveNavLinks" :href="link.href"
                               :active="link.href === route().current()" :as="!link.condition ? 'link' : ''">
                {{ link.name }}
            </ResponsiveNavLink>
        </div>

        <!-- Responsive Settings Options -->
        <div class="pt-4 pb-1 border-t border-gray-200" v-if="user">
            <div class="flex items-center px-4">
                <div v-if="jetstream.managesProfilePhotos" class="shrink-0 mr-3">
                    <img class="h-10 w-10 rounded-full object-cover" :src="user.profile_photo_url" :alt="user.name">
                </div>

                <div>
                    <div class="font-medium text-base text-gray-800">
                        {{ user.name }}
                    </div>
                    <div class="font-medium text-sm text-gray-500">
                        {{ user.email }}
                    </div>
                </div>
            </div>

            <div class="mt-3 space-y-1" v-if="user">
                <ResponsiveNavLink :href="route('profile.show')" :active="route().current('profile.show')">
                    Profile
                </ResponsiveNavLink>

                <ResponsiveNavLink v-if="jetstream.hasApiFeatures" :href="route('api-tokens.index')"
                                   :active="route().current('api-tokens.index')">
                    API Tokens
                </ResponsiveNavLink>

                <!-- Authentication -->
                <form method="POST" @submit.prevent="logout">
                    <ResponsiveNavLink as="button">
                        Log Out
                    </ResponsiveNavLink>
                </form>

                <!-- Team Management -->
                <template v-if="jetstream.hasTeamFeatures">
                    <div class="border-t border-gray-200"/>

                    <div class="block px-4 py-2 text-xs text-gray-400">
                        Manage Team
                    </div>

                    <!-- Team Settings -->
                    <ResponsiveNavLink :href="route('teams.show', user.current_team)"
                                       :active="route().current('teams.show')">
                        Team Settings
                    </ResponsiveNavLink>

                    <ResponsiveNavLink v-if="jetstream.canCreateTeams" :href="route('teams.create')"
                                       :active="route().current('teams.create')">
                        Create New Team
                    </ResponsiveNavLink>

                    <div class="border-t border-gray-200"/>

                    <!-- Team Switcher -->
                    <div class="block px-4 py-2 text-xs text-gray-400">
                        Switch Teams
                    </div>

                    <template v-for="team in user.all_teams" :key="team.id">
                        <form @submit.prevent="switchToTeam(team)">
                            <ResponsiveNavLink as="button">
                                <div class="flex items-center">
                                    <svg
                                        v-if="team.id === user.current_team_id"
                                        class="mr-2 h-5 w-5 text-green-400"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <div>{{ team.name }}</div>
                                </div>
                            </ResponsiveNavLink>
                        </form>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>
