<template>
  <MainLayout>
    <q-btn @click="$q.notify('test')">test</q-btn>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
</script>
