<script setup lang="ts">
import {ConfigInterface, JetstreamInterface, UserInterface} from "../interfaces";
import Navbar from "../Components/Navbar.vue";
import {Head, Link} from "@inertiajs/inertia-vue3";
import Banner from "../Components/Banner.vue";
import {navbarLinks} from "../Modules/links";

const props = defineProps({
    title: {type: String, default: "Welcome"},
    user: {type: Object as () => UserInterface, required: false},
    jetstream: {type: Object as () => JetstreamInterface, required: false},
    config: {type: Object as () => ConfigInterface, required: true},
    logo: {type: String, required: true}
});

const linkClass = "text-md text-white uppercase bg-[#74ABD4] hover:bg-[#3B87C0] p-4";

const links = navbarLinks(props)

</script>

<template>
    <div>
        <!--suppress HtmlRequiredTitleElement -->
        <Head :title="title"/>

        <Banner/>

        <div class="min-h-screen bg-gray-100">
            <Navbar :config="config" :logo="logo" :jetstream="jetstream" :user="user">
                <template v-slot:links>
                    <div class="flex">
                        <div :key="key" v-for="(link, key) in links">
                            <a v-if="link.condition" target="_blank"
                               :href="link.href"
                               :class="linkClass"> {{ link.name }}
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
