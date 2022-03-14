<script setup lang="ts">

interface Props {
    modelValue: string
}

interface Emits {
    (e: 'update:modelValue', v: string): void
    (e: 'searchEnter',v:boolean):void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

function handleOnInput(e: Event) {
    const { target } = e
    if (target instanceof HTMLInputElement) {
        const { value } = target
        emit('update:modelValue', value)
    }
}

</script>

<template>
    <section>
        <input placeholder="Arama Yapmak İstediğiniz Şehir" :value="modelValue" @input="handleOnInput" @keyup.enter="emit('searchEnter',true)" type="text" />
    </section>
</template>


<style scoped>
@import url("@/assets/css/search.css");
</style>