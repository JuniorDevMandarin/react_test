import { useMemo } from 'react';
import { container } from 'tsyringe';

export function useInjection<T>(token: { new (...args: any[]): T }): T {
  return useMemo(() => container.resolve(token), [token]);
}
