// Importacion de modulos
import { getBarcos } from "./barcos.js";

// Variable del Document
const $d = document

// Variables de los botones Consultar 
const $consultarCategorias = $d.getElementById("category-get"),
         $consultarBarcos = $d.getElementById("boat-get"),
         $consultarClientes = $d.getElementById("client-get"),
         $consultarMensajes = $d.getElementById("message-get"),
         $consultarReservaciones = $d.getElementById("reservation-get")

// Variables de los botones Guardar
const $guardarCategorias = $d.getElementById("category-save"),
         $guardarBarcos = $d.getElementById("boat-save"),
         $guardarClientes = $d.getElementById("client-save"),
         $guardarMensajes = $d.getElementById("message-save"),
         $guardarReservaciones = $d.getElementById("reservation-save")

// Agregamos los eventos de los botones

$d.addEventListener("click", e => {

  if(e.target === $consultarBarcos) {
  getBarcos()
  console.log(e.target)
  e.target.setAttribute("disabled","true")
  }  

  if(e.target === $consultarCategorias) {
  getCategorias()
  console.log(e.target)
  e.target.setAttribute("disabled","true")
  }  

})

