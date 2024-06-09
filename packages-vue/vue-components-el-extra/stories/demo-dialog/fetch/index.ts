export function fetchSubmit(type: "success" | "fail"): Promise<boolean> {
  return new Promise((resolve, reason) => {
    if(type === "success") {
      setTimeout(() => {
        resolve(true);
      }, 2000);

      return;
    }

    setTimeout(() => {
      reason(false);
    }, 2000);
  });
}
