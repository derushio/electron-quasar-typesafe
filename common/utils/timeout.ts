export async function timeout(ms: number) {
  return await new Promise((resolve) => setTimeout(resolve, ms));
}
