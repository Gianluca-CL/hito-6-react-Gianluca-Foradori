import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error al obtener la pizza:", error));
  }, []);

  if (!pizza) {
    return <div className="p-4 text-center">Cargando pizza...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4 text-center shadow rounded bg-white">
      <h2 className="text-2xl font-bold mb-2">{pizza.name}</h2>
      <img
        src={pizza.img}
        alt={pizza.name}
        className="w-full h-64 object-cover mb-4 rounded"
      />
      <p className="mb-2 font-semibold">Precio: ${pizza.price}</p>
      <p className="mb-2 text-gray-700">Ingredientes: {pizza.ingredients.join(", ")}</p>
      <p className="text-sm text-gray-600 mb-4">{pizza.desc}</p>
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Añadir al carrito
      </button>
    </div>
  );
};

export default Pizza;
