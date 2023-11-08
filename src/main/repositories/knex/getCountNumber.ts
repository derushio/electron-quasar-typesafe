export function getCountNumber<T>(countResult: { [k: string]: T }) {
  return countResult?.[0]?.['count(*)'] ?? 0;
}
