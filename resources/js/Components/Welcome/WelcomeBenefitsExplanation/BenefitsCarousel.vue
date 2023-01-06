<script setup lang="ts">

import {onMounted, ref} from "vue";

const whys = ([
    {
        title: "Save The Wildlife",
        description: "Find out quickly what protocols are working best in your clinic. Save more lives by learning from your records.",
        img: "https://www.wrmd.org/img/site/how-wildlife.png",
    },
    {
        title: "Save The People",
        description: "Save time, energy and money with quick access to the information you need. No more digging through or losing paper records.",
        img: "https://www.wrmd.org/img/site/how-people.png",
    },
    {
        title: "Save The Data",
        description: "Analyze and learn from your data. Discover best practices and needed areas of improvement.",
        img: "https://www.wrmd.org/img/site/how-data.png",
    },
]);

let activeIndex = ref(0);

const length = whys.length - 1;

onMounted(() => {
    setInterval(() => {

        if (length == activeIndex.value) {
            activeIndex.value = 0;
        } else {
            activeIndex.value += 1;
        }
    }, 5000);
})
</script>

<template>
    <div id="welcome-benefits-carousel">
        <div v-for="(why, index) in whys" :key="index">
            <div
                class="duration-300 space-x-3"
                :class="{'opacity-0': activeIndex !== index, 'opacity-100': activeIndex === index, 'hidden': activeIndex !== index, 'flex': activeIndex === index, 'flex-row': activeIndex === index }">
                <div>
                    <img :src="why.img" :alt="why.title">
                </div>
                <div>
                    <h1 class="text-white font-bold text-2xl">{{ why.title }}
                    </h1>
                    <p class="py-3 text-white">
                        {{ why.description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
