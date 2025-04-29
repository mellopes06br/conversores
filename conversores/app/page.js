"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Conversor de Unidades</h1>
      <p className="text-lg mb-8 text-center text-gray-600">
        Bem-vindo ao meu conversor de unidades! Utilize os links abaixo para acessar os diferentes conversores.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/conversor-moeda"
          className="bg-indigo-500 hover:bg-indigo-700 text-black font-bold py-2 px-4 rounded-lg text-center transition duration-300"
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6366f1'}
        >
          Conversor de Moeda (Dólar/Real)
        </Link>
        <Link
          href="/conversor-temperatura"
          className="bg-orange-500 hover:bg-orange-700 text-black font-bold py-2 px-4 rounded-lg text-center transition duration-300"
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
        >
          Conversor de Temperatura (°C/°F)
        </Link>
        <Link
          href="/conversor-distancia"
          className="bg-teal-500 hover:bg-teal-700 text-black font-bold py-2 px-4 rounded-lg text-center transition duration-300"
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0f766e'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#14b8a6'}
        >
          Conversor de Distância (Metros/Pés/Polegadas)
        </Link>
        <Link
          href="/sobre"
          className="bg-rose-500 hover:bg-rose-700 text-black font-bold py-2 px-4 rounded-lg text-center transition duration-300"
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#be123c'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e11d48'}
        >
          Sobre
        </Link>
      </div>
    </div>
  );
}