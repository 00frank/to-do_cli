#!/usr/bin/env node
const argv = require('./config/yargs').argv
const tareas = require('./tareas-pendientes/tareas')
require('colors')
const figlet = require('figlet')

console.log(figlet.textSync('To-Do List', { font: 'Graffiti' }).cyan);

var comando = argv._[0]
var descripcion = argv.descripcion
var estado = argv.estado
var borrarCual = argv.cuales

switch (comando) {
  case "crear":
    if (descripcion.length === true || descripcion.length < 1) return console.log("La descripción es muy corta!");
    let nuevaTarea = tareas.crear(descripcion, estado)
    console.log(`Tarea creada! ${(nuevaTarea.descripcion).green}\nEstado: ${nuevaTarea.estado ? "Terminado".green : "Pendiente".yellow}`);
    break;
  case "listar":
    let listado = tareas.getListado();
    if (listado.length === 0) return console.log(`No hay tareas! Creelas con el comando ${'crear -d "descripción"'.green}`);
    console.log("Mostrando tareas")
    for (let i = listado.length - 1; i >= 0; i--) {
      let t = listado[i]
      printTarea(t);
    }
    break;
  case "actualizar":
    let tareaActualizada = tareas.actualizar(descripcion, estado)
    if (tareaActualizada) {
      console.log("Tarea actualizada!");
      console.log(`${tareaActualizada.descripcion} (${tareaActualizada.estado ? "Finalizada".green : "Pendiente".yellow})`);
    }
    break;
  case "borrar":
    let borrado = tareas.borrar(descripcion)
    console.log(borrado ? "La tarea se elimino exitosamente" : "No se encontro una tarea con esa descripción");
    break;
  case "limpiar":
    tareas.limpiar(borrarCual)
    break;
  default:
    if (!comando) return console.log("Porfavor ingrese un comando diponible: crear | listar | actualizar | borrar | limpiar");
    console.log(`No se encontro una definición para el siguiente comando: ${comando}`);
}

function printTarea(t) {
  if (t.estado === true) {
    console.log("=======Tarea Terminada==========".green)
    console.log(`${t.descripcion}\nEstado: (${"Terminado".green})`)
    console.log("================================\n".green)
  } else {
    console.log("=======Tarea Pendiente==========".yellow)
    console.log(`${t.descripcion}\nEstado: (${"Pendiente".yellow})`)
    console.log("================================\n".yellow)
  }
}
