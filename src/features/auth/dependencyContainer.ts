import { container } from 'tsyringe';
import { AuthService } from '../../core/authService';

// Register AuthService in the container
container.register(AuthService, { useClass: AuthService });
