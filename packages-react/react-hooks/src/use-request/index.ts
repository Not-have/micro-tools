import {
  useEffect, useState
} from "react";

export default function useRequest<T>(func: () => Promise<T>): [T | null, boolean] {
  const [
    data, setData
  ] = useState<T | null>(null);

  const [
    loading, setLoading
  ] = useState(false);

  useEffect(() => {
    setLoading(true);
    func().
        then((res: T) => setData(res)).
        finally(() => setLoading(false));
  }, [
    func
  ]);

  return [
    data, loading
  ];
}
