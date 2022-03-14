<script setup lang="ts">
import { computed, onMounted, reactive } from "vue";
import OpenWeatherService from "@/services/OpenWeatherService";
import Search from "./components/Search.vue";
import Weather from "./components/Weather.vue";
import { getLocation } from "@/helpers"
import type IMeasurements from "./interfaces/props/IMeasurements";
import type ITemperature from "./interfaces/props/ITemperature";
import type IWeather from "./interfaces/props/IWeather";
import Measurements from "./components/Measurements.vue";
import Temperature from "./components/Temperature.vue";

const state = reactive({
  date: new Date(),
  coord: {
    lat: 0,
    lon: 0
  },
  measurements: {} as IMeasurements,
  temperature: {} as ITemperature,
  weather: {} as IWeather,
  search: ''
})

onMounted(async () => {
  state.coord = await getLocation()
  const data = await OpenWeatherService.getLocation(state.coord)
  state.measurements.cloudiness = data.clouds.all
  state.measurements.windSpeed = data.wind.speed
  state.measurements.humidity = data.main.humidity
  state.temperature.value = Math.round(data.main.temp)
  state.temperature.high = Math.round(data.main.temp_max)
  state.temperature.low = Math.round(data.main.temp_min)
  state.weather.location = `${data.name}, ${data.sys.country}`
  state.weather.description = data.weather[0].description
  //state.weather.icon = require('../assets/icons/weather/cloud.svg')
})

const getPeriod = computed(() => {
  const hour = state.date.getHours()
  return (hour > 5 && hour < 18) ? 'day' : 'night'
})


const query = async () => {
  const data = await OpenWeatherService.getQuery({ query: state.search })
  state.measurements.cloudiness = data.clouds.all
  state.measurements.windSpeed = data.wind.speed
  state.measurements.humidity = data.main.humidity
  state.temperature.value = Math.round(data.main.temp)
  state.temperature.high = Math.round(data.main.temp_max)
  state.temperature.low = Math.round(data.main.temp_min)
  state.weather.location = `${data.name}, ${data.sys.country}`
  state.weather.description = data.weather[0].description
}


</script>

<template>
  <main class="weather" :class="getPeriod">
    <Search v-model="state.search" @searchEnter="query" />
    <main>
      <Measurements :data="state.measurements" />
      <Temperature :data="state.temperature" />
      <Weather :data="state.weather" />
    </main>
  </main>
</template>

<style>
@import url("@/assets/css/app.css");
@import url("@/assets/css/weather.css");
</style>