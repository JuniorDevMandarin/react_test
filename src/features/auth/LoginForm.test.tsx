import 'reflect-metadata';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { of } from 'rxjs';
import { LoginForm } from './LoginForm';
import { AuthService } from '../../core/authService';
import { container } from 'tsyringe';

// Mock AuthService
const mockLogin = vi.fn(() => of({ token: 'mock-token' }));

const mockAuthService: Partial<AuthService> = {
  login: mockLogin,
};

// Register the mock service with the DI container
container.registerInstance(AuthService, mockAuthService as AuthService);

test('should call login on submit', () => {
  render(<LoginForm />);
  
  // Perform actions on the form
  fireEvent.change(screen.getByPlaceholderText("Ім'я користувача"), { target: { value: 'username' } });
  fireEvent.change(screen.getByPlaceholderText('Пароль'), { target: { value: 'password' } });
  fireEvent.click(screen.getByText('Вхід'));

  // Verify that the login method was called with the correct parameters
  expect(mockLogin).toHaveBeenCalledWith('username', 'password');
});
