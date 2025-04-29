"use client";

import { useState } from 'react';

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  const [error, setError] = useState(null);

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setCelsius('');
      setFahrenheit('');
      setError(null);
      return;
    }

    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setCelsius(parsedValue.toFixed(2));
      setFahrenheit((parsedValue * 9 / 5 + 32).toFixed(2));
      setError(null);
    } else {
      setError("Entrada inválida. Use apenas números.");
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      setFahrenheit('');
      setCelsius('');
      setError(null);
      return;
    }

    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setFahrenheit(parsedValue.toFixed(2));
      setCelsius(((parsedValue - 32) * 5 / 9).toFixed(2));
      setError(null);
    } else {
      setError("Entrada inválida. Use apenas números.");
    }
  };

  return (
    <div className="bg-purple-100 min-h-screen py-8">
      <div className="container mx-auto p-6 bg-purple-50 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">Conversor de Temperatura (°C/°F)</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full max-w-sm">
            <label htmlFor="celsius" className="block text-lg font-medium text-purple-800 mb-2">Celsius (°C):</label>
            <input
              type="number"
              id="celsius"
              aria-label="Entrada de temperatura em Celsius"
              value={celsius}
              onChange={handleCelsiusChange}
              className="w-full px-4 py-3 border border-purple-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-purple-900"
              step="0.01"
            />
          </div>
          <div className="w-full max-w-sm">
            <label htmlFor="fahrenheit" className="block text-lg font-medium text-purple-800 mb-2">Fahrenheit (°F):</label>
            <input
              type="number"
              id="fahrenheit"
              aria-label="Entrada de temperatura em Fahrenheit"
              value={fahrenheit}
              onChange={handleFahrenheitChange}
              className="w-full px-4 py-3 border border-purple-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-purple-900"
              step="0.01"
            />
          </div>
        </div>
      </div>
    </div>
  );
}