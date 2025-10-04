export function apiTest01(): Promise<{
  name: string;
  age: number;
  email: string;
}> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        age: 20,
        email: "john.doe@example.com"
      });
    }, 1000);
  });
}
