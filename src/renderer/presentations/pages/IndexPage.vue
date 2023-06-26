<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <div class="q-mb-md">
        <q-chip
          v-for="(user, i) in usersQuery.data.value?.responseList ?? []"
          :key="i"
          >{{ user.name }}</q-chip
        >
      </div>

      <q-btn @click="focus">focus</q-btn>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { sleep } from '$/utils/sleep';
import { trpc } from '@/repositories/trpc';
import { useLoadingStore } from '@/usecases/stores/loadingStore';
import { useQuery } from 'vue-query';

const loadingStore = useLoadingStore();

const usersQuery = useQuery(
  ['usersQuery'],
  async () =>
    await loadingStore.actions.doLoadingAction(
      async () => await trpc['/users/users'].query({}),
    ),
);

async function focus() {
  await sleep(5000);
  await trpc['/currentWindow/focus'].mutate();
}
</script>
