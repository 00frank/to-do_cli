const def_options = { descripcion: { demand: true, alias: 'd', desc: 'Descripcion de la tarea' }, estado: { default: false, alias: 'e', desc: 'Estado de la tarea: true/false' } }
const argv = require('yargs')
  .command('crear', 'Crea un nuevo registro de tarea pendiente', def_options)
  .command('actualizar', 'Establece si la tarea fue finalizada o no (true o false)',
    { ...def_options, estado: { default: true, alias: 'e', desc: 'Estado de la tarea: true/false' } })
  .command('listar', 'Imprime todas las tareas por consola, mostrando su estado')
  .command('borrar', 'Elimina la tarea según la descripción recibida', { descripcion: { demand: true, alias: 'd', desc: 'Descripcion de la tarea' } })
  .command('limpiar','Elimina todas las tareas o las finalizadas', {cuales: {demand: true, alias: 'c'}})
  .help()
  .argv

module.exports = { argv }