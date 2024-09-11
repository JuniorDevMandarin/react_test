/**
 * Головний компонент App налаштовує основні провайдери та структуру застосунку.
 * Включає маршрутизатор, глобальні стилі та інші налаштування.
 */
import React from 'react';
import { AppRouter } from './core/router'; // Імпорт маршрутизатора
import { container } from 'tsyringe';
import { AuthService } from './core/authService';
import './index.css'; // Глобальні стилі

/**
 * Головний компонент застосунку.
 * Налаштовує DI, маршрутизацію та інші провайдери.
 */
const App = () => {
  // Реєстрація сервісів DI
  container.registerSingleton(AuthService);

  return (
    <div className="App">
      {/* Провайдер маршрутизатора */}
      <AppRouter />
    </div>
  );
};

export default App;
