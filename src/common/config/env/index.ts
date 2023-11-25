import { Env as TsxEnv } from '$/config/env/tsx';
import { Env as ViteEnv } from '$/config/env/vite';

export const Env = ViteEnv.VITE_BUILDED != null ? ViteEnv : TsxEnv;
