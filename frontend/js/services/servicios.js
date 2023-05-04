import { BASE_URL } from "../enviroments/enviroments.js";

//traer todos los productos del servidor
export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/productos`);
  const json = await response.json();
  return json;
};

//enviar un producto al servidor
export const posProduct = async (producto) => {
  const response = await fetch(`${BASE_URL}/productos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  const json = await response.json();
  return json;
};

//mostrar un producto
export const getProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/producto/${id}`);
  const json = await response.json();
  return json;
};

//actualizar un producto
export const putProduct = async (producto, id) => {
  const response = await fetch(`${BASE_URL}/producto/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto),
  });
  const json = response.json();
  return json;
};

//eliminar un producto
export const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/producto/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const json = await response.json();
  return json;
};
