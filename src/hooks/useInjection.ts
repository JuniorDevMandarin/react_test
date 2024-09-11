// hooks/useInjection.ts

/**
 * Хук для інжекції залежностей з контейнера DI.
 *
 * @param token - Токен або клас, який потрібно інжектувати.
 * @returns Інжектована залежність з контейнера.
 */
import { container, InjectionToken } from 'tsyringe';
import { useMemo } from 'react';

export function useInjection<T>(token: InjectionToken<T>): T {
  return useMemo(() => container.resolve(token), [token]);
}
