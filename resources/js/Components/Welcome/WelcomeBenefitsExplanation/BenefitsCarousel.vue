<script setup>
const whys = [
    {
        title: "Save The Wildlife",
        description: "Find out quickly what protocols are working best in your clinic. Save more lives by learning from your records.",
        img: "https://www.wrmd.org/img/site/how-wildlife.png",
        active: false
    },
    {
        title: "Save The People",
        description: "Save time, energy and money with quick access to the information you need. No more digging through or losing paper records.",
        img: "https://www.wrmd.org/img/site/how-people.png",
        active: false
    },
    {
        title: "Save The Data",
        description: "Analyze and learn from your data. Discover best practices and needed areas of improvement.",
        img: "https://www.wrmd.org/img/site/how-data.png",
        active: false
    },
];

const classString = "flex flex-row space-x-2 carousel-item active";

const inactiveClassString = "flex flex-row space-x-2 carousel-item";

const imgClassString = "w-12 h-12 block w-full";

const textClassString = "text-2xl";
</script>

<template>
    <div
        class="carousel slide carousel-fade carousel-dark relative"
        data-bs-ride="carousel"
        id="carousel"
    >
        <!-- Inner -->
        <div class="carousel-inner w-full overflow-hidden absolute flex flex-row">
            <div
                :class="classString">
                <img :class="imgClassString" :src="whys[0].img" :alt="whys[0].title">
                <div><span :class="textClassString">{{ whys[0].title }}</span>
                    <p>{{ whys[0].description }}</p></div>
            </div>

            <div
                :class="inactiveClassString">
                <img :class="imgClassString" :src="whys[1].img" :alt="whys[1].title">
                <div><span :class="textClassString">{{ whys[1].title }}</span>
                    <p>{{ whys[1].description }}</p></div>
            </div>

            <div
                :class="inactiveClassString">
                <img :class="imgClassString" :src="whys[2].img" :alt="whys[2].title">
                <div><span :class="textClassString">{{ whys[2].title }}</span>
                    <p>{{ whys[2].description }}</p></div>
            </div>
        </div>
        <!-- Inner -->
    </div>
</template>
