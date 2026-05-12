/**
 * Simple in-memory cache with TTL.
 * Untuk avoid hit API external berkali-kali.
 */

type CacheEntry<T> = { data: T; expires: number };

const store = new Map<string, CacheEntry<unknown>>();

export async function cached<T>(
	key: string,
	ttlMs: number,
	fetcher: () => Promise<T>
): Promise<T> {
	const entry = store.get(key) as CacheEntry<T> | undefined;
	if (entry && entry.expires > Date.now()) {
		return entry.data;
	}

	const data = await fetcher();
	store.set(key, { data, expires: Date.now() + ttlMs });
	return data;
}
