/**
 * Файл налаштування Dependency Injection (DI).
 * Реєструє необхідні сервіси в контейнері DI.
 */
import { container } from 'tsyringe';
import { AuthService } from '../core/authService';

/**
 * Реєстрація AuthService як синглтон в контейнері DI.
 */

container.registerSingleton(AuthService);