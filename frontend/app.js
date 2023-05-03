const BASE_URL = "http://127.0.0.1:5000";

let mostrarProd = document.getElementById("mostrarProd");
let inputNombre = document.getElementById("inputNombre");
let inputPrecio = document.getElementById("inputPrecio");
let btnEnviar = document.getElementById("btnEnviar");
let lista=document.getElementById("lista");

mostrarProd.onclick = () => {   
    //al precionar el boton diremos que vaya hacer una consulta  al servidor esperando ka respuesta
    fetch(`${BASE_URL}`.then((respuesta)=>{
        respuesta.json()
    }))

  getProduct();
};

const getProduct = (product) => {
  console.log(product);
  product.forEach((objProd) => {
    const element = document.createElement("li");
    li.innerHTML=`${objProd.nombre}`
    lista.append(li)
  });
};
