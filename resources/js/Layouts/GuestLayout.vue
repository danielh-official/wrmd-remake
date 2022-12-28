<script setup lang="ts">
import {ConfigInterface, JetstreamInterface, UserInterface} from "../interfaces";
import Navbar from "../Components/Navbar.vue";
import {Head, Link} from "@inertiajs/inertia-vue3";
import Banner from "../Components/Banner.vue";

const props = defineProps({
    title: {type: String, default: "Welcome"},
    user: {type: Object as () => UserInterface, required: false},
    jetstream: {type: Object as () => JetstreamInterface, required: false},
    config: {type: Object as () => ConfigInterface, required: true},
});

const linkClass = "text-md text-white uppercase bg-[#74ABD4] hover:bg-[#3B87C0] p-4";

const links = [
    {
        condition: props.config.custom.pages.features == 'https://www.wrmd.org/features',
        name: "Features",
        href: props.config?.custom.pages.features
    },
    {
        condition: props.config.custom.pages.getHelp == 'https://help.wrmd.org/',
        name: "Get Help",
        href: props.config?.custom.pages.getHelp
    },
    {
        condition: false,
        name: "Sign In",
        href: route('login')
    }
];

</script>

<template>
    <div>
        <!--suppress HtmlRequiredTitleElement -->
        <Head :title="title"/>

        <Banner/>

        <div class="min-h-screen bg-gray-100">
            <Navbar :jetstream="jetstream" :user="user">
                <template v-slot:links>
                    <div class="flex">
                        <div :key="key" v-for="(link, key) in links">
                            <a v-if="link.condition" target="_blank"
                               :href="link.href"
                               :class="linkClass"> {{ link.name}}
                            </a>
                            <Link v-else :href="link.href"
                                  :class="linkClass">{{ link.name }}
                            </Link>
                        </div>
                    </div>
                </template>
            </Navbar>

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