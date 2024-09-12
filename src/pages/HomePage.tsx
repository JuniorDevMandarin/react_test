/**
 * HomePage - простий компонент, що відображає головний контент застосунку.
 */
import React from 'react';
import { Header } from '../components/Header'
 
export const HomePage = () => {
  return <>
    <Header/>  
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="text-3xl font-semibold text-gray-800 border border-solid p-20 rounded-full border-red-800 bg-red-200">
        Hello World
      </div>
    </div>
    </>;
};
