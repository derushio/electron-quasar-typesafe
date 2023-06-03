<template>
  <q-page class="row items-center justify-evenly">
    <q-btn @click="test">test</q-btn>
  </q-page>
</template>

<script setup lang="ts">
import { trpc } from '@/domains/trpc';

async function test() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await trpc['/currentWindow/focus'].mutate();
}
</script>
