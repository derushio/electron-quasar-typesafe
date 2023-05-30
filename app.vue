<template>
  <MainLayout>
    <q-btn @click="$q.notify('test')">test</q-btn>
    {{ serverFunctionTestResult }}
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';

import type * as functions from '#build/server-fn';

const serverFns: typeof functions = useServerFunctions();
const serverFunctionTestResult = ref<string[]>();

onMounted(async () => {
  serverFunctionTestResult.value = await serverFns.serverFunctionTest();
});
</script>
