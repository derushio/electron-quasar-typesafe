import { t } from '#/domains/ipc';
import { currentWindowResource } from '#/domains/ipc/router/currentWindow';
import { responseOk } from '#/domains/ipc/router/response';
import { store } from '#/store';

export const currentWindowFocusRouter = t.router({
  [`${currentWindowResource}/focus`]: t.procedure.mutation(async () => {
    const mainWindow = store.states.currentWindow;
    if (!mainWindow) {
      return responseOk();
    }

    mainWindow.focus();
    return responseOk();
  }),
});
