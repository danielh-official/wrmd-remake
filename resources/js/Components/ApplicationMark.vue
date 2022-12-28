<script setup lang="ts">

defineProps({
    logo: {type: String, required: true}
});
</script>

<template>
    <div class="text-black dark:text-white flex space-x-3">
        <div class="contents" v-html="logo"></div>
        <div class="block">
            <p class="text-lg">WRMD</p>
            <p class="text-sm">Wildlife Rehabilitation <span class="text-xs">MD</span></p>
        </div>
    </div>
</template>
