import { EssentialLinkProps } from '$/presentations/components/atoms/drawer/EssentialLink';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Home',
    icon: 'home',
    link: '#',
    target: '_self',
  },
];

export const useDrawerStore = defineStore('drawer', () => {
  const leftDrawerOpen = ref(false);

  const actions = {
    toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    },
  };

  // 注意：refは直接returnしてください
  return {
    leftDrawerOpen,
    essentialLinks,
    actions,
  };
});
