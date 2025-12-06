export default function queue() {
  const queue = new Map<string, Promise<unknown>>();

  return {
    queue
  };
}
