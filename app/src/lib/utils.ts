import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combine class names with proper Tailwind merge.
 * Used by shadcn-svelte components and custom UI.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
