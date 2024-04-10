import { FormData } from 'formdata-node';
import undici from 'undici';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).FormData = FormData;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).File = undici.File;
