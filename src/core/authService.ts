/**
 * Сервіс AuthService надає функціональність для автентифікації.
 * Він обробляє вхід користувача, вихід та відстежує стан сесії реактивно.
 */
import { BehaviorSubject, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export class AuthService {
  private isAuthenticated$ = new BehaviorSubject(false);

  /**
   * Імітує виклик API для входу.
   * 
   * @param username - Ім'я користувача.
   * @param password - Пароль користувача.
   * @returns Observable, що повертає мок-відповідь з токеном.
   */
  login(username: string, password: string) {
    // Імітація виклику API
    return of({ success: true });
  }

  /**
   * Вихід користувача з оновленням стану автентифікації.
   */
  logout() {
    this.isAuthenticated$.next(false);
  }

  /**
   * Повертає Observable з поточним станом автентифікації.
   * 
   * @returns Observable, що повертає true, якщо користувач автентифікований, false в іншому випадку.
   */
  isAuthenticated() {
    return this.isAuthenticated$.asObservable();
  }
}

export const authService = new AuthService();