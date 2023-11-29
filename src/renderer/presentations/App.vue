<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useQueryProvider } from 'vue-query';

useQueryProvider({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});
</script>

<style lang="scss">
@import '&/node_modules/quasar/dist/quasar.prod.css';
@import '&/node_modules/@quasar/extras/material-icons/material-icons.css';

@import '$/assets/styles/app.scss';
@import '$/assets/styles/quasar-variables.scss';
</style>
