const fs = require('fs')
const path = require('path')

const crear = (descripcion, estado) => {
  let tarea = { descripcion, estado }
  tareas.push(tarea)
  updateDB()
  return tarea;
}

const actualizar = (descripcion, estado) => {
  let i = tareas.findIndex(t => t.descripcion === descripcion)
  if (i < 0) return console.log("No se encontro una tarea con esa descripción");
  tareas[i].estado = estado === true; //lo recibe como string
  updateDB()
  return tareas[i]
}

const getListado = () => {
  return tareas;
}

const borrar = (descripcion) => {
  let i = tareas.findIndex(t => t.descripcion === descripcion)
  if (i < 0) return false;
  tareas.splice(i, 1)
  updateDB()
  return true
}

const limpiar = (cuales) => {
  if (cuales === "todas") {
    tareas = []
    console.log("Todas las tareas fueron eliminadas");
  } else if (cuales === "terminadas") {
    tareas = tareas.filter(t => t.estado === false)
    console.log("Todas las tareas terminadas fueron eliminadas");
  } else if (cuales === "pendientes") {
    tareas = tareas.filter(t => t.estado === true)
    console.log("Todas las tareas pendientes fueron eliminadas");
  } else {
    console.log("Indique una opción valida: todas | terminadas | pendientes");
  }
  updateDB()
}

const limpiarTerminadas = () => {
  var tareasTerminadas = tareas.filter(t => t.estado === true)
  console.log('tareasTerminadas: ', tareasTerminadas);

}

const updateDB = () => {
  fs.writeFile(path.join(__dirname, '../database/tareas.json'), JSON.stringify(tareas), err => {
    if (err) return console.log(err);
  })
}

const cargarDB = () => {
  let tareas = fs.readFileSync(path.join(__dirname, '../database/tareas.json'), 'utf8')
  if (tareas === "") return [] // importante! si no tira error en caso de vacio
  return JSON.parse(tareas)
  // tambien funciona
  // let tareas = require('../database/tareas.json')
  // return tareas
}

let tareas = cargarDB()

module.exports = { crear, getListado, actualizar, borrar, limpiar, limpiarTerminadas }