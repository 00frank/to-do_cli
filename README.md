# To-Do List #

<details>
  <summary><b>Requisitos (importante)</b></summary>
  <ul>
    <li>Tener instalado NodeJS</li>
    <li>Tener instalado NPM</li>
    <li>No tener ningun comando llamado "todoss"</li>
  </ul>
</details>

## Pasos a seguir ##

1. Primero ejecutar el siguiente comando (dentro de la carpeta del proyecto) para obtener las librerias.
```javascript
> npm install
```

2. Ejecutar el siguiente comando para poder llamar al programa desde cualquier ruta.
```javascript
> npm link
```

3. Correr el programa.
```javascript
> todoss
```

## Lista de comandos ##

Comando | Parametros | Descripción
| :--- | :--- | ---:
**crear** | descripcion | Crea una nueva tarea
\- | estado=false | 
**listar** |  | Lista todas las tareas y sus estados
**actualizar** | descripcion | Actualiza el estado de las tareas
\- | estado=true | 
**borrar** | descripcion | Elimina una tarea de la lista
**limpiar** | cuales | Limpia todas las tareas indicando cuales

-----

## Lista de parametros ##

Parametro | Invocación | Alias | Recibe:
| :--- | :--- | :--- | ---:
**descripcion**| --descripcion | -d | String
**estado** | --estado | -e | boolean
**cuales** | --cuales | -c | todas/pendientes/realizadas

### Ejemplo de creación de tarea
![crear -d "tarea"](/assets/example.png)

Las tareas se guardan en la carpeta /database/tareas.json, con el siguiente formato:
```json
[
  { "descripcion": "pasear al perro", "estado": true },
  { "descripcion": "subir proyecto a github", "estado": false }
]
```

