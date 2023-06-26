import { defineStore } from 'pinia';
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export const useLoadingStore = defineStore('loading', () => {
  const q = useQuasar();

  // loadingの呼び出し回数を管理
  const nests = ref(0);

  const keyMaps = ref<Map<string, number>>(new Map());

  const actions = {
    show: (key?: string) => {
      q.loading.show();
      nests.value++;
      if (key) {
        keyMaps.value.set(key, (keyMaps.value.get(key) ?? 0) + 1);
      }
    },
    hide: (key?: string) => {
      if (key) {
        const keyCount = keyMaps.value.get(key) ?? 0;
        keyMaps.value.delete(key);
        nests.value -= keyCount;
      } else {
        nests.value--;
      }

      if (nests.value <= 0) {
        q.loading.hide();
        nests.value = 0;
      }
    },
    async doLoadingAction<T>(fn: () => T) {
      try {
        actions.show();
        // eslint-disable-next-line @typescript-eslint/await-thenable
        return await fn();
      } finally {
        actions.hide();
      }
    },
  };

  const getters = {};

  return { nests, actions, getters };
});
