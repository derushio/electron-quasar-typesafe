<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <FullPage class="row items-center justify-evenly">
    <div>
      <div class="q-mb-md">
        <q-chip
          v-for="(user, i) in usersQuery.data.value?.responseList ?? []"
          :key="i"
        >
          {{ user.name }}
        </q-chip>
      </div>

      <q-btn @click="log">button</q-btn>
    </div>
  </FullPage>
</template>

<script setup lang="ts">
import FullPage from '$/presentations/pageTypes/FullPage.vue';

import { trpc } from '$/infrastructures/trpc';
import { useLoadingStore } from '$/stores/utils/loadingStore';
import { useQuery } from '@tanstack/vue-query';
import { Env } from '^/config/env';

const loadingStore = useLoadingStore();

const usersQuery = useQuery({
  queryKey: ['usersQuery'],
  queryFn: async () =>
    await loadingStore.actions.doLoadingAction(
      async () => await trpc['/user/query'].query({}),
    ),
});

function log() {
  console.log(Env.VITE_ENV_EXAMPLE);
  console.log(Env.VITE_RENDERER_ENV_EXAMPLE);
}
</script>
