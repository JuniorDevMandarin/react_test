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

// Реєстрація фіктивного сервісу з контейнером DI
container.registerInstance(AuthService, mockAuthService as AuthService);

test('should call login on submit', () => {
  render(<LoginForm />);
  
  // Виконання дій у формі
  fireEvent.change(screen.getByPlaceholderText("Ім'я користувача"), { target: { value: 'username' } });
  fireEvent.change(screen.getByPlaceholderText('Пароль'), { target: { value: 'password' } });
  fireEvent.click(screen.getByText('Вхід'));

  // Перевірка того, що метод входу був викликаний з правильними параметрами
  expect(mockLogin).toHaveBeenCalledWith('username', 'password');
});
