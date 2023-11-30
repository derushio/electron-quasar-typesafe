import { defineStore } from 'pinia';
import { useQuasar } from 'quasar';

export const useLoadingStore = defineStore('loading', () => {
  const q = useQuasar();

  const actions = {
    show: (key?: string) => {
      q.loading.show({
        group: key,
      });
    },
    hide: (key?: string) => {
      q.loading.hide(key);
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

  return { actions, getters };
});
