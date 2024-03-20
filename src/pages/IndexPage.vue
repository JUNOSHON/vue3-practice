<template>
  <div>
    <button @click="log">{{ msg }}</button>
    <h3>{{capitalize('hello')}}</h3>
  </div>
</template>

<script setup lang="ts">
import { capitalize } from 'vue';

const msg = '안녕!';

function log() {
  console.log(msg);
}
</script>

<style scoped></style>
