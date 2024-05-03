export interface IReturns {
  query: Record<string, AnyObject | unknown> | string | null;
  location: string;
  referrer: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Record<string, any> | string | null;
}
