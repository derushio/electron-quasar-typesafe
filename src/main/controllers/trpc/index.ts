import { initTRPC } from '@trpc/server';
import {
  experimental_createMemoryUploadHandler,
  experimental_isMultipartFormDataRequest,
  experimental_parseMultipartFormData,
} from '@trpc/server/adapters/node-http/content-type/form-data';
import { NodeHTTPRequest } from '@trpc/server/dist/adapters/node-http';
import superjson from 'superjson';

/** router定義用 */
export const t = initTRPC.create({
  transformer: superjson,
});

/** method定義用 (json) */
export const tp = t.procedure;

/** method定義用 (formdata) */
export const tpf = tp.use(async (opts) => {
  const ctx = opts.ctx as {
    req: NodeHTTPRequest;
  };
  if (!experimental_isMultipartFormDataRequest(ctx.req)) {
    return opts.next();
  }

  const formData = await experimental_parseMultipartFormData(
    ctx.req,
    experimental_createMemoryUploadHandler({
      maxPartSize: 1 * 1024 * 1024 * 1024,
    }),
  );

  return opts.next({
    rawInput: formData,
  });
});
