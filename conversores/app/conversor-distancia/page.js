"use client";
import { useState } from 'react';

export default function ConversorDistancia() {
  const [metros, setMetros] = useState('');
  const [pes, setPes] = useState('');
  const [polegadas, setPolegadas] = useState('');

  const handleMetrosChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setMetros(value.toFixed(2));
    setPes((value * 3.28084).toFixed(2));
    setPolegadas((value * 39.3701).toFixed(2));
  };

  const handlePesChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setPes(value.toFixed(2));
    setMetros((value / 3.28084).toFixed(2));
    setPolegadas((value * 12).toFixed(2));
  };

  const handlePolegadasChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setPolegadas(value.toFixed(2));
    setMetros((value / 39.3701).toFixed(2));
    setPes((value / 12).toFixed(2));
  };

  return (
    <div className="bg-lime-100 min-h-screen py-8">
      <div className="container mx-auto p-6 bg-lime-50 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-lime-700">Conversor de Distância</h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full max-w-sm">
            <label htmlFor="metros" className="block text-lg font-medium text-lime-800 mb-2">Metros:</label>
            <input
              type="number"
              id="metros"
              value={metros}
              onChange={handleMetrosChange}
              className="w-full px-4 py-3 border border-lime-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 text-lime-900"
              step="0.01"
            />
          </div>
          <div className="w-full max-w-sm">
            <label htmlFor="pes" className="block text-lg font-medium text-lime-800 mb-2">Pés:</label>
            <input
              type="number"
              id="pes"
              value={pes}
              onChange={handlePesChange}
              className="w-full px-4 py-3 border border-lime-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 text-lime-900"
              step="0.01"
            />
          </div>
          <div className="w-full max-w-sm">
            <label htmlFor="polegadas" className="block text-lg font-medium text-lime-800 mb-2">Polegadas:</label>
            <input
              type="number"
              id="polegadas"
              value={polegadas}
              onChange={handlePolegadasChange}
              className="w-full px-4 py-3 border border-lime-300 rounded-md shadow-sm focus:outline-none focus:ring-lime-500 focus:border-lime-500 text-lime-900"
              step="0.01"
            />
          </div>
        </div>
      </div>
    </div>
  );
}