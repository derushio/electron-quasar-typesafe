<template>
  <q-page class="row items-center justify-evenly">
    {{ value }}
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const myAPI = (window as any).myAPI;

const value = ref<string[]>();

onMounted(async () => {
  console.log(myAPI);
  value.value = await myAPI.doAThing();
});
</script>
