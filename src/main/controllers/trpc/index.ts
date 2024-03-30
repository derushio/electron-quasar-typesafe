import { initTRPC } from '@trpc/server';
import { NodeHTTPCreateContextFnOptions } from '@trpc/server/adapters/node-http';
import {
  experimental_createMemoryUploadHandler,
  experimental_isMultipartFormDataRequest,
  experimental_parseMultipartFormData,
} from '@trpc/server/adapters/node-http/content-type/form-data';
import { Request, Response } from 'express';
import superjson from 'superjson';

export async function createContext(
  opts: NodeHTTPCreateContextFnOptions<Request, Response>,
) {
  return { req: opts.req };
}

/** router定義用 */
export const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
});

/** method定義用 (json) */
export const tp = t.procedure;

/** method定義用 (formdata) */
export const tpf = tp.use(async (opts) => {
  if (!experimental_isMultipartFormDataRequest(opts.ctx.req)) {
    return opts.next();
  }

  const formData = await experimental_parseMultipartFormData(
    opts.ctx.req,
    experimental_createMemoryUploadHandler({
      maxPartSize: 1 * 1024 * 1024 * 1024,
    }),
  );

  return opts.next({
    rawInput: formData,
  });
});
