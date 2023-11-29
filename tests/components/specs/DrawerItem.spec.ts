import DrawerItemVue from '$/presentations/components/atoms/drawer/DrawerItem.vue';

import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';

test('DrawerItemVue', async () => {
  const text = 'test';
  const drawerItem = mount(DrawerItemVue, {
    slots: {
      default: text,
    },
  });

  expect(drawerItem.text(), 'slot確認').contain(text);
});
