export type TAwaitable<T> = Promise<T> | T;

export async function interopDefault<T>(m: TAwaitable<T>): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await m;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (resolved as any).default || resolved;
}
