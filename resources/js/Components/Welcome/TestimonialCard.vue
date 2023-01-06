<template>
    <div class="sm:w-6/12">
        <div class="flex flex-col bg-white text-gray-400 p-4 sm:h-48">

            <div>
                <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white">
                    <svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"/>
                    </svg>
                    <p class="text-sm text-gray-500">"We love WRMD so far! We just started using it at Human Animal Rescue Wildlife Center in January
                        of
                        2018, and have not had any issues transferring or using our information on it. It is really easy
                        to
                        use and train people to use. The transition was very smooth and well worth it - we especially
                        love
                        seeing analytics as they happen."</p>
                </blockquote>
            </div>

            <div class="mt-7 text-black text-lg">
                Jess Lindberg - Clinic manager, HAR Wildlife Center
            </div>
        </div>


        <div class="flex bg-gray-300 text-white p-2 pl-5"><a href="https://www.wrmd.org/features" class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor"
                 class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>

            <div class="ml-2">
                <a v-if="testimonialsRoute === 'https://www.wrmd.org/testimonials'" target="_blank"
                   :href="testimonialsRoute"
                   class="hover:underline hover:text-gray-200">Read more testimonials
                </a>
                <Link v-else class="hover:underline hover:text-gray-200" :href="testimonialsRoute">Read more
                    testimonials
                </Link>
            </div>
        </a></div>
    </div>
</template>
<script setup lang="ts">
import {Link} from "@inertiajs/inertia-vue3";

defineProps({
    testimonialsRoute: {type: String, required: true}
});
</script>
