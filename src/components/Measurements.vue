<script setup lang="ts">
import type IMeasurements from '@/interfaces/props/IMeasurements';

const props = defineProps <{
    data:IMeasurements
}>()
</script>
<template>
    <section>
        <div class="cloudiness">
            <img src="../assets/icons/cloud.svg" alt="cloudiness" />
            <span class="cloudiness__value">{{ data.cloudiness }}</span>&percnt;
        </div>
        <div class="wind-speed">
            <img src="../assets/icons/wind.svg" alt="wind speed" />
            <span class="wind__value">{{ data.windSpeed }}</span>m/s
        </div>
        <div class="humidity">
            <img src="../assets/icons/humidity.svg" alt="humidity" />
            <span class="humidity__value">{{ data.humidity }}</span>&percnt;
        </div>
    </section>
</template>

<style scoped>
@import url("@/assets/css/measurements.css");
</style>
