<script setup>
import {computed} from 'vue';
import {Link} from '@inertiajs/inertia-vue3';

const props = defineProps({
    active: Boolean,
    href: String,
    as: String,
    hrefTargetBlank: {type: Boolean, default: true}
});

const classes = computed(() => {
    return props.active
        ? 'block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition'
        : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition';
});
</script>

<template>
    <div>
        <button v-if="as === 'button'" :class="classes" class="w-full text-left">
            <slot/>
        </button>

        <Link v-else-if="as === 'link'" :href="href" :class="classes">
            <slot/>
        </Link>

        <a v-else :target="hrefTargetBlank ? '_blank' : ''" :href="href" :class="classes">
            <slot/>
        </a>
    </div>
</template>
