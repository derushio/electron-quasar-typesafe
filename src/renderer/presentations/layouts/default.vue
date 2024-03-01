<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawerStore.actions.toggleLeftDrawer()"
        />

        <q-toolbar-title>{{ Env.VITE_RENDERER_APP_NAME }}</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerStore.leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Essential Links</q-item-label>

        <EssentialLink
          v-for="link in drawerStore.essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import EssentialLink from '$/presentations/components/atoms/drawer/EssentialLink.vue';

import { useDrawerStore } from '$/stores/features/general/drawerStore';
import { Env } from '^/config/env';

const drawerStore = useDrawerStore();
</script>
