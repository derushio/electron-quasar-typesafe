import indexVue from '$/presentations/pages/index.vue';

import { shallowMount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { test } from 'vitest';

test('indexVue', async () => {
  setActivePinia(createPinia());
  shallowMount(indexVue);
});
