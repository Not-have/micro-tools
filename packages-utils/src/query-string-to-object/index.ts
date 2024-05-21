/**
 * window.location.search 的值转换为 Object
 * @param queryString window.location.search
 * @returns {Record<string, string>} Object
 */
export default function queryStringToObject(
  queryString: string
): Record<string, string> {
  const params = new URLSearchParams(queryString);
  const result: Record<string, string> = {
  };

  params.forEach((value, key) => {
    result[key] = value;
  });

  return result;
}