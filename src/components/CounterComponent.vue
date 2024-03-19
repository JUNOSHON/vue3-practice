<template>
  <div>{{ storeCount}}</div>
  <h3>{{ squaredCounter }}</h3>
  <button @click="increase">+</button>
  <button @click="decrease">-</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '../store/counterStore';
import { computed, ref } from 'vue';

const countStore = useCounterStore();
const squaredCounter = computed(() => countStore.squaredCount);
const increase = () => countStore.increment();
const decrease = () => countStore.decrement();

const storeCount = ref(countStore.count);
console.log(countStore.count);
console.log(countStore.$state);
console.log(countStore.$state.count);
console.log(storeCount);
</script>

<style scoped></style>
