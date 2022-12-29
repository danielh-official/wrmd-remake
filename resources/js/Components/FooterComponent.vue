<script setup lang="ts">
import {ConfigInterface} from "../interfaces";
import {toRefs} from "vue";

const props = defineProps({
    config: {type: Object as () => ConfigInterface, required: true},
});

const {config} = toRefs(props);

interface FooterLinkInterface {
    href: string;
    name: string;
    targetIsBlank: boolean;
}

const footerLinks: FooterLinkInterface[] = [
    {
        // @ts-ignore
        href: route('home'),
        name: 'Home',
        targetIsBlank: false
    },
    {
        // @ts-ignore
        href: config?.value?.custom.pages.termsAndPolicies,
        name: 'Terms and Policies',
        targetIsBlank: true
    },
    {
        // @ts-ignore
        href: config?.value?.custom.pages.getHelp,
        name: 'Help and FAQs',
        targetIsBlank: true
    },
    {
        // @ts-ignore
        href: config?.value?.custom.pages.blog,
        name: 'Blog',
        targetIsBlank: true
    },
    {
        // @ts-ignore
        href: config?.value?.custom.pages.about,
        name: 'About',
        targetIsBlank: true
    },
    {
        // @ts-ignore
        href: config?.value?.custom.pages.contact,
        name: 'Contact Us',
        targetIsBlank: true
    },
];

// TODO: Make footer align with navbar.

</script>

<template>
    <footer class="bg-gray-500 flex flex-col sm:flex-row space-y-6 sm:space-y-0 space-x-6 dark:text-white px-5">
        <div class="flex-1">
            WRMD is proudly supporting the standards of
            <ul class="flex flex-row bg-white p-5 space-x-6">
                <li>
                    <img src="https://www.wrmd.org/img/site/usfws.png" alt="U.S. Fish &amp; Wildlife Service">
                </li>
                <li>
                    <img src="https://www.wrmd.org/img/site/cadfw.png"
                         alt="California Department of Fish &amp; Wildlife">
                </li>
                <li>
                    <img src="https://www.wrmd.org/img/site/nwra.png"
                         alt="National Wildlife Rehabilitator's Association">
                </li>
                <li>
                    <img src="https://www.wrmd.org/img/site/iwrc.png"
                         alt="International Wildlife Rehabilitation Council">
                </li>
            </ul>
        </div>
        <div class="bg-gray-700 p-12 flex-1 place-self-center">
            <ul class="flex p-5 space-x-6 justify-center">
                <li><a class="fill-gray-200 hover:fill-gray-400" target="_blank"
                       href="https://www.facebook.com/WildlifeRehabilitationMD">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                </a></li>
                <li><a class="fill-gray-200 hover:fill-gray-400" target="_blank"
                       href="https://www.twitter.com/WildlifeRehabMD">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                </a></li>
                <li><a class="fill-gray-200 hover:fill-gray-400" target="_blank"
                       href="https://www.youtube.com/user/WildlifeRehabMD">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                </a></li>
                <li><a class="fill-gray-200 hover:fill-gray-400" href="http://blog.wrmd.org/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/>
                    </svg>
                </a></li>
            </ul>
        </div>
        <div class="text-xs py-2 text-right flex-1">
            <ul class="mb-2">
                <li v-for="(item, index) in footerLinks" :key="index">
                    <a class="hover:text-gray-300" :href="item.href" :target="item.targetIsBlank ? '_blank' : ''">{{
                            item.name
                        }}</a>
                </li>
            </ul>
            <div>
                <div>
                    Copyright&nbsp;&copy;&nbsp;<a class="hover:text-gray-300" target="_blank"
                                                  href="https://github.com/danielh-official">Daniel Haven</a>
                </div>
                <div>
                    All rights reserved
                </div>
            </div>
        </div>
    </footer>
</template>
