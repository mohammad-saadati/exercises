// box.ts
export const box = new (class {
  locked = true;
  #content: any[] = [];

  unlock() {
    this.locked = false;
  }
  lock() {
    this.locked = true;
  }
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this.#content;
  }
})();

export function withBoxUnlocked(body: () => void): void {
  const wasLocked = box.locked;
  if (wasLocked) box.unlock();

  try {
    body();
  } finally {
    if (wasLocked) box.lock();
  }
}
