import { t } from '#/controllers/ipc/trpc';
import { currentWindowResource } from '#/controllers/ipc/trpc/router/currentWindow';
import { responseOk } from '#/controllers/ipc/trpc/router/response';
import { store } from '#/repositories/state';

export const currentWindowFocusRouter = t.router({
  [`${currentWindowResource}/focus` as const]: t.procedure.mutation(
    async () => {
      const mainWindow = store.states.currentWindow;
      if (!mainWindow) {
        return responseOk();
      }

      mainWindow.focus();
      return responseOk();
    },
  ),
});
