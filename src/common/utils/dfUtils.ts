import { ja } from 'date-fns/locale';

export const japaneseDateFormats = [
  'yyyy/MM/dd (eee) HH:mm',
  { locale: ja },
] as const;

export function cloneDate(date: Date) {
  return new Date(date.getTime());
}
