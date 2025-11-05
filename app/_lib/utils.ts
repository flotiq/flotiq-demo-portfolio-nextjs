import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const locales = ['en', 'pl'];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
