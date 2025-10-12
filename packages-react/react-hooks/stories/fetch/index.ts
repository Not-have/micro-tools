export interface IParams {
  id?: string;
}

export interface IResponse {
  content: string;
  title: string;
  author: string;
  url: string;
}

export function testFetch(id: string, version: string): Promise<IResponse | null> {
  // eslint-disable-next-line no-console
  console.log("testFetch", id, version);

  return fetch("https://mock.mengxuegu.com/mock/60434bccf340b05bceda3906/practise-nuxtjs/test").
      then(res => res.json()).
      then(res => {
        if (res.code === 200) {
          return res.data;
        }

        return null;
      });
}
