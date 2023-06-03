<template>
  <MainLayout>
    <q-page class="q-pa-lg">
      <q-btn @click="$q.notify('test')" class="q-mb-md">test</q-btn>
    </q-page>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';

onMounted(async () => {
  // TODO:
});
</script>

<style lang="scss">
@import '@/assets/styles/app.scss';
</style>
