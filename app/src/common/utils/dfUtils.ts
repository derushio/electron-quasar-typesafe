import { ja } from 'date-fns/locale';

/**
 * date-fns format DBなどショートフォーマット
 * yyyy-MM-dd
 */
export const dateShortFormats = ['yyyy-MM-dd', { locale: ja }] as const;

/**
 * date-fns format 日本向けショートフォーマット
 * yyyy/MM/dd
 */
export const japaneseDateShortFormats = ['yyyy/MM/dd', { locale: ja }] as const;

/**
 * date-fns format 日本向けショートフォーマット
 * yyyy年M月d日
 */
export const japaneseDateLocaleFormats = [
  'yyyy年M月d日',
  { locale: ja },
] as const;

/**
 * date-fns format 日本向けDateTimeフォーマット
 * yyyy/MM/dd (eee) HH:mm
 */
export const japaneseDateTimeFormats = [
  'yyyy/MM/dd (eee) HH:mm',
  { locale: ja },
] as const;

/**
 * date-fns format 日本向けDate曜日付きフォーマット
 * yyyy/MM/dd (eee)
 */
export const japaneseDateFormats = [
  'yyyy/MM/dd (eee)',
  { locale: ja },
] as const;

/**
 * date-fns format 日本向けDateTimeフォーマット
 * HH:mm
 */
export const japaneseTimeFormats = ['HH:mm', { locale: ja }] as const;

/**
 * Dateのクローン
 */
export function cloneDate(date: Date) {
  return new Date(date.getTime());
}
