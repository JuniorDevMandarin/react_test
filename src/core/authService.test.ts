import { test, expect } from 'vitest';
import { firstValueFrom } from 'rxjs';
import { vi } from 'vitest';
import { of } from 'rxjs';
import { AuthService } from './authService';
import 'reflect-metadata';


const mockAuthService: Partial<AuthService> = {
  login: vi.fn(() => of({ token: 'mock-token' }))
};

test('should authenticate user', async () => {
    const result = await firstValueFrom(mockAuthService.login('user', 'password'));
    console.log('Result:', result);
    expect(result.token).toBe('mock-token');
  });
  