/**
 * Safe Storage Utility
 * Prevents crashes across all browsers (including iOS Safari Private Browsing,
 * incognito modes, restricted WebViews, and disabled cookie environments)
 * where localStorage / sessionStorage throws SecurityError or QuotaExceededError.
 */

class MemoryStorage implements Storage {
  private memoryStore: Map<string, string> = new Map();

  get length(): number {
    return this.memoryStore.size;
  }

  clear(): void {
    this.memoryStore.clear();
  }

  getItem(key: string): string | null {
    return this.memoryStore.get(key) ?? null;
  }

  key(index: number): string | null {
    const keys = Array.from(this.memoryStore.keys());
    return keys[index] ?? null;
  }

  removeItem(key: string): void {
    this.memoryStore.delete(key);
  }

  setItem(key: string, value: string): void {
    this.memoryStore.set(key, String(value));
  }
}

function getStorage(type: 'localStorage' | 'sessionStorage'): Storage {
  try {
    if (typeof window === 'undefined') return new MemoryStorage();
    const storage = window[type];
    const testKey = '__storage_test__';
    storage.setItem(testKey, testKey);
    storage.removeItem(testKey);
    return storage;
  } catch {
    return new MemoryStorage();
  }
}

export const safeLocalStorage = getStorage('localStorage');
export const safeSessionStorage = getStorage('sessionStorage');

export function safeJsonParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

