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
import { trpc } from '@/repositories/trpc';
import { useQuery } from 'vue-query';

const usersQuery = useQuery(['usersQuery'], () =>
  trpc['/users/users'].query({}),
);

async function focus() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await trpc['/currentWindow/focus'].mutate();
}
</script>
