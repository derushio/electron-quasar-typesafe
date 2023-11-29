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

      <q-btn @click="log">button</q-btn>
    </div>
  </FullPage>
</template>

<script setup lang="ts">
import FullPage from '$/presentations/pageTypes/FullPage.vue';

import { Env } from '^/config/env';
import { trpc } from '$/repositories/trpc';
import { useLoadingStore } from '$/usecases/stores/loadingStore';
import { useQuery } from 'vue-query';

const loadingStore = useLoadingStore();

const usersQuery = useQuery(
  ['usersQuery'],
  async () =>
    await loadingStore.actions.doLoadingAction(
      async () => await trpc['/users'].query({}),
    ),
);

function log() {
  console.log(Env.VITE_ENV_EXAMPLE);
  console.log(Env.VITE_RENDERER_ENV_EXAMPLE);
}
</script>
^/utils/wait
