export function loop<T>(
  value: T,
  test: (val: T) => boolean,
  update: (val: T) => T,
  body: (val: T) => void
): void {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}

loop<number>(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

