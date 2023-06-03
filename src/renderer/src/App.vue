<template>
  <div>{{ test }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const test = ref('test')
</script>

<style lang="scss">
@import './assets/styles/app.scss';
</style>
