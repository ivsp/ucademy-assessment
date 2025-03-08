export function delayedExecution(callback: () => void, delay: number) {
  setTimeout(() => {
    callback();
  }, delay);
}
