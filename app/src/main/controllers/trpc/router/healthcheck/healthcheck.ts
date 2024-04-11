import { t, tp } from '#/controllers/trpc';
import { responseOk } from '#/controllers/trpc/router/response';

export const healthcheckRouter = t.router({
  ['healthcheck' as const]: tp.query(async (req) => {
    return responseOk(req.ctx);
  }),
});
