import dayjs from 'dayjs';
import 'dayjs/locale/ja';

const adjs = dayjs;
adjs.locale('ja-JP');

export { adjs };

export const japaneseDayjsFormat = 'YYYY/MM/DD (ddd) HH:mm';
