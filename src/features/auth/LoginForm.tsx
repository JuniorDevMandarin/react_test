// // LoginForm.tsx

// /**
//  * Компонент LoginForm відображає форму для введення даних користувача і входу.
//  * Використовує AuthService для автентифікації та обробляє відправку форми.
//  */
// import React, { useState } from 'react';
// import { useInjection } from '../../hooks/useInjection'; // Використання власного хука
// import { AuthService } from '../../core/authService'; // Перевірте шлях імпорту

// export const LoginForm = () => {
//   const authService = useInjection(AuthService);

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   /**
//    * Обробляє відправку форми і запускає процес входу.
//    *
//    * @param e - Подія відправки форми.
//    */
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     authService.login(username, password).subscribe({
//       next: (response) => {
//         console.log('Login successful:', response);
//       },
//       error: (error) => {
//         console.error('Login failed:', error);
//       },
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Ім'я користувача"
//         className="mb-2 p-2 border border-gray-300"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Пароль"
//         className="mb-2 p-2 border border-gray-300"
//       />
//       <button type="submit" className="p-2 bg-blue-500 text-white">
//         Вхід
//       </button>
//     </form>
//   );
// };
import React, { useState } from 'react';
import { useInjection } from '../../hooks/useInjection'; // Ensure this hook is properly implemented
import { AuthService } from '../../core/authService'; // Correct import path

export const LoginForm = () => {
  const authService = useInjection(AuthService);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authService) {
      console.error('AuthService is not available');
      return;
    }
    authService.login(username, password).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
      },
      error: (error) => {
        console.error('Login failed:', error);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name = "username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Ім'я користувача"
        className="mb-2 p-2 border border-gray-300"
      />
      <input
        type="password"
        name = "password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        className="mb-2 p-2 border border-gray-300"
      />
      <button  className="p-2 bg-blue-500 text-white">
        Вхід
      </button>
    </form>
  );
};
