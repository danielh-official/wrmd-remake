<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    emits: [
        'update:modelValue'
    ],
    props: {
        modelValue: {required: true, type: Boolean}
    },
    methods: {
        setShowingNavigationDropdown() {
            this.$emit('update:modelValue', !this.modelValue);
        }
    },
})
</script>

<template>
    <button
        id="navbar-hamburger"
        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"
        @click="setShowingNavigationDropdown">
        <svg
            class="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                :class="{'hidden': modelValue, 'inline-flex': ! modelValue }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
            <path
                :class="{'hidden': ! modelValue, 'inline-flex': modelValue }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    </button>
</template>
