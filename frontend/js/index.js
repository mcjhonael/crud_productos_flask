import {getProduct,getProducts,putProduct,deleteProduct,posProduct} from './services/servicios.js'

let btnProd = document.getElementById("btnProd");
let inputNombre = document.getElementById("inputNombre");
let inputPrecio = document.getElementById("inputPrecio");
let btnEnviar = document.getElementById("btnEnviar");
let btnPut = document.getElementById("btnPut");
let lista = document.getElementById("lista");
let btnGet = document.getElementById("btnGet");
let btnEliminar=document.getElementById("btnEliminar");

//ejecutar la accion de traer todo los productos y mostrarlos en pantalla
btnProd.onclick = () => {
  lista.textContent = "";
  getProducts().then((resp) => {
    mostrarProducts(resp);
  });
};

//metodo que se encarga de mostrar todo los productos en pantalla
const mostrarProducts = ({ content: product }) => {
  lista.textContent=""
  product.forEach((objProd) => {
    const li = document.createElement("li");
    li.innerHTML = `${objProd.nombre}`;
    lista.append(li);
  });
};

//mostrar 1 producto
const mostrarProduct = ({ content: product }) => {
  lista.textContent = "";
  const li = document.createElement("li");
  li.textContent = `${product.nombre}`;
  lista.append(li);
};

//enviar los producto al servidor
btnEnviar.onsubmit = (e) => {
  e.preventDefault();
  let objProducto = {
    nombre: "",
    precio: 0,
  };
  objProducto["nombre"] = inputNombre.value;
  objProducto["precio"] = inputPrecio.value;
  posProduct(objProducto).then((res) => {
    console.log(res);
  });
};

//actulizar un producto
btnPut.onclick = () => {
  let objProducto = {
    nombre: "",
    precio: 0,
  };
  objProducto["nombre"] = inputNombre.value;
  objProducto["precio"] = inputPrecio.value;
  putProduct(objProducto, 1).then((resp) => {
    console.log(resp);
  });
};

//mostrar 1 producto
btnGet.onclick = () => {
  getProduct(3).then((resp) => {
    mostrarProduct(resp);
  });
};

btnEliminar.onclick=()=>{
  deleteProduct(2);
  getProducts().then((resp) => {
    mostrarProducts(resp);
  });
}