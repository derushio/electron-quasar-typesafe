<template>
  <router-view />
  <NuxtLayout />
</template>

<script setup lang="ts">
import { Env } from '^/config/env';
import { useMeta } from 'quasar';

useMeta({
  title: Env.VITE_RENDERER_APP_NAME,
});
</script>

<style lang="scss">
@import '&/node_modules/quasar/dist/quasar.prod.css';
@import '&/node_modules/@quasar/extras/material-icons/material-icons.css';

@import '$/assets/styles/app.scss';
@import '$/assets/styles/quasar-variables.scss';
</style>
