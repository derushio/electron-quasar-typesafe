import { t, tp } from '#/controllers/trpc';
import { currentWindowResource } from '#/controllers/trpc/router/currentWindow';
import { responseOk } from '#/controllers/trpc/router/response';
import { store } from '#/repositories/state';

export const currentWindowFocusRouter = t.router({
  [`${currentWindowResource}/focus` as const]: tp.mutation(async () => {
    const mainWindow = store.states.currentWindow;
    if (!mainWindow) {
      return responseOk();
    }

    mainWindow.focus();
    return responseOk();
  }),
});
