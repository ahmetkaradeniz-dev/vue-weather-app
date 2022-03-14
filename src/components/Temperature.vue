<script setup lang="ts">

const props = defineProps<{ data: any }>();

</script>

<template>
    <section>
        <div class="temperature__value"> {{ data.value }} </div>
        <div class="temperature__right">
            <div class="temperature__scale">
                &deg;C
            </div>
            <div class="temperature__high">
                <img src="../assets/icons/high.svg" alt="high temperature" />
                <span>{{ data.high }}&deg;</span>
            </div>
            <div class="temperature__low">
                <img src="../assets/icons/low.svg" alt="low temperature" />
                <span>{{ data.low }}&deg;</span>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url('@/assets/css/temperature.css')
</style>