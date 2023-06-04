import { t } from '#/controllers/ipc';
import { currentWindowResource } from '#/controllers/ipc/router/currentWindow';
import { responseOk } from '#/controllers/ipc/router/response';
import { store } from '#/store';

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
