/**
 * MainLayout служить макетом для застосунку.
 * Включає в себе хедер і основну область для вкладених маршрутів.
 */
import React from 'react';
import { Outlet } from '@tanstack/react-router';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="p-4 bg-blue-500 text-white">My App</header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};
