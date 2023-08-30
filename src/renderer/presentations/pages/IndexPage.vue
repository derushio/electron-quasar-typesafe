<template>
  <FullPage class="row items-center justify-evenly">
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
  </FullPage>
</template>

<script setup lang="ts">
import FullPage from '@/presentations/pageTypes/FullPage.vue';

import { Env } from '$/config/env';
import { wait } from '$/utils/wait';
import { trpc } from '@/repositories/trpc';
import { useLoadingStore } from '@/usecases/stores/loadingStore';
import { useQuery } from 'vue-query';

const loadingStore = useLoadingStore();

const usersQuery = useQuery(
  ['usersQuery'],
  async () =>
    await loadingStore.actions.doLoadingAction(
      async () => await trpc['/users'].query({}),
    ),
);

console.log(Env.VITE_MAIN_ENV_EXAMPLE);

async function focus() {
  await wait(5000);
  await trpc['/currentWindow/focus'].mutate();
}
</script>
$/utils/wait
