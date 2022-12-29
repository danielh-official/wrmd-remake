<script setup>
import {Link} from "@inertiajs/inertia-vue3";
import {toRefs} from "vue";

const props = defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    href: {
        type: String,
        required: false
    },
    classString: {
        type: String,
        required: false,
    },
    color: {
        type: String,
        required: false
    },
    target: {
        type: String,
        default: "_blank"
    }
});


let {classString} = toRefs(props);
let {color} = toRefs(props);

let classStringConstant = `inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition`;

if (classString.value) {
    classStringConstant = classString.value;
}

if (!classString.value && color) {
    if (color.value === 'green') {
        classStringConstant = "inline-flex items-center px-4 py-2 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-green-300 disabled:opacity-25 transition";
    } else if (color.value === 'red') {
        classStringConstant = "inline-flex items-center px-4 py-2 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-red-300 disabled:opacity-25 transition";
    }
}
</script>

<template>
    <button v-if="!href" :type="type" :class="classStringConstant">
        <slot/>
    </button>
    <Link v-else-if="type === 'link'" :href="href" :class="classStringConstant">
        <slot/>
    </Link>
    <a v-else :target="target" :href="href" :class="classStringConstant">
        <slot/>
    </a>
</template>
