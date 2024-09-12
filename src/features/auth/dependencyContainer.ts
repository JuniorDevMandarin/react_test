import { container } from 'tsyringe';
import { AuthService } from '../../core/authService';

// Реєстрація AuthService в контейнері
container.register(AuthService, { useClass: AuthService });
