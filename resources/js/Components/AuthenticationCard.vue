<template>
    <div class="px-2 sm:px-0 min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-700">
        <div>
            <slot name="logo" />
        </div>

        <div class="text-xl uppercase dark:text-white">
            <slot name="heading" />
        </div>

        <div class="w-full sm:max-w-xl mt-6 px-6 py-4 bg-white dark:bg-gray-900 shadow-md overflow-hidden sm:rounded-lg">
            <slot />
        </div>

        <div class="text-xl uppercase dark:text-white mt-5">
            <slot name="footer-heading" />
        </div>

        <div class="mt-5 bg-white dark:text-gray-300 sm:max-w-xl dark:bg-gray-900 sm:max-w-xl px-6 shadow-md overflow-hidden sm:rounded-lg py-4">
            <slot name="footer" />
        </div>
    </div>
</template>
