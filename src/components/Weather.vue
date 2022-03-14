<script setup lang="ts">
import type IWeather from '@/interfaces/props/IWeather';

const props = defineProps<{
    data:IWeather
}>()

</script>

<template>
    <section>
        <div class="location">{{ data.location }}</div>
        <div class="weather__description">{{ data.description }}</div>
        <img class="weather__icon" :src="data.icon" :alt="data.description">
    </section>
</template>

<style scoped>
@import url("@/assets/css/weather.css");
</style>