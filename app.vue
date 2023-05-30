<template>
  <MainLayout>
    <q-page class="q-pa-lg">
      <q-btn @click="$q.notify('test')" class="q-mb-md">test</q-btn>
      <div>
        <q-chip v-for="(item, i) in serverFunctionTestResult" :key="i">{{
          item
        }}</q-chip>
      </div>
    </q-page>
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
