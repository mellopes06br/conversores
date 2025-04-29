"use client";
import { useState } from 'react';

export default function ConversorMoeda() {
  const [real, setReal] = useState('');
  const [dolar, setDolar] = useState('');
  const cotacaoDolar = 5.25;

  const handleRealChange = (e) => {
    const value = e.target.value.replace(",", ".");
    if (value === '') {
      setReal('');
      setDolar('');
      return;
    }

    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setReal(parsedValue.toFixed(2));
      setDolar((parsedValue / cotacaoDolar).toFixed(2));
    }
  };

  const handleDolarChange = (e) => {
    const value = e.target.value.replace(",", ".");
    if (value === '') {
      setDolar('');
      setReal('');
      return;
    }

    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setDolar(parsedValue.toFixed(2));
      setReal((parsedValue * cotacaoDolar).toFixed(2));
    }
  };

  return (
    <div className="bg-emerald-100 min-h-screen py-8">
      <div className="container mx-auto p-6 bg-emerald-50 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-emerald-700">
          Conversor de Moeda (Dólar/Real)
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full max-w-sm">
            <label htmlFor="real" className="block text-lg font-medium text-emerald-800 mb-2">
              Reais (BRL):
            </label>
            <input
              type="number"
              id="real"
              aria-label="Entrada de valor em reais"
              value={real}
              onChange={handleRealChange}
              className="w-full px-4 py-3 border border-emerald-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-emerald-900"
              step="0.01"
              placeholder="0,00"
            />
          </div>
          <div className="w-full max-w-sm">
            <label htmlFor="dolar" className="block text-lg font-medium text-emerald-800 mb-2">
              Dólares (USD):
            </label>
            <input
              type="number"
              id="dolar"
              aria-label="Entrada de valor em dólares"
              value={dolar}
              onChange={handleDolarChange}
              className="w-full px-4 py-3 border border-emerald-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 text-emerald-900"
              step="0.01"
              placeholder="0.00"
            />
          </div>
        </div>
        <p className="mt-6 text-sm text-emerald-500 text-center">
          Cotação utilizada: 1 Dólar = {cotacaoDolar.toFixed(2)} Reais (valor fixo)
        </p>
      </div>
    </div>
  );
}