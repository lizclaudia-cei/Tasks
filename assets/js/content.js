
//------------------------------------
// Comentarios y doc 
//------------------------------------
/*
    Vamos a realizae un ToDo list para prácticar el uso de Objetos y Arrays.
    link al manual:
    Autor: El profe Tomi
*/


//-------------------------------
// Variables
//-------------------------------
const btnSubmit = document.getElementById('btnSubmit');
const formTareas = document.getElementById('formTareas');
const inputAddTask = document.getElementById('inputAddTask');
const boxTasks = document.getElementById('boxTasks');

const listaDeTareas = [
    {
        id: 1,
        tittle: 'Ordenar el codigo JS',
        isDone: true,

    },
    {
        id: 2,
        tittle: 'Crear las funciones',
        isDone: false,

    },
    {
        id: 3,
        tittle: 'Probar el codigo',
        isDone: false,

    }
];


// -------------------------------
// Funciones 
//---------------------------------

/**
 * Función para imprimir la lista de Tareas en el html
 */
function showTasks() {
    // borrar contendio de la caja
    boxTasks.innerHTML = ``;

    listaDeTareas.forEach((tarea) => {
        boxTasks.innerHTML += `<li class="Main-li">
                                  <div class="Main-inputs">
                                   <input type="checkbox" id="${tarea.id}" ${tarea.isDone ? 'checked' : ''} ">
                                   <label for="${tarea.id}">${tarea.tittle}</label>  
                                  </div>
                                                                
                                   <div class="Main-buttons">
                                    <button onclick=deleteTask(${tarea.id}) class=" u-delet">X</button>
                                   <button onclick=doneTask(${tarea.id}) class="Button" id='btnDone'>Completar</button>
                                   </div>
                                  
                               </li>`
    });
    console.log(listaDeTareas);
}

/**
 * Función para agregar una nueva tarea a la lista listaDeTareas
 * Si la tarea viene vacia muestra una alerta 
 * @param {String} tarea
 */
function addTask() {
    const tarea = { id: 0 , tittle: '', isDone: false,}
    if (!inputAddTask.value.includes('<') && inputAddTask.value.trim() != "") {
        tarea.tittle = inputAddTask.value;
        tarea.id =  listaDeTareas[listaDeTareas.length-1].id + 1;
        listaDeTareas.push(tarea);
    } else {
        alert("Por favor ingresa una tarea válida");
    }
    inputAddTask.value = ''
    showTasks();
}
/**
 * Función para completar una tarea  de la lista de tareas
 * @param {number} id // el id del elemento 
 */
function doneTask(id) {
    const tarea = listaDeTareas.find(tarea => tarea.id == id);
    tarea.isDone = !tarea.isDone;
    showTasks();
}
/**
 * Función para eliminar la tarea seleccionda
 * @param {number} id // el id del elemento
 */
function deleteTask(id) {
    const index = listaDeTareas.findIndex(tarea => tarea.id == id);
    console.log(index);
    listaDeTareas.splice(index, 1);
    showTasks();
// listaDeTareas = listaDeTareas.filter(tarea => tarea.id != id); => Para que este sea viable listaDeTareas no puede ser const
}

// -------------------------------
// Eventos  
//---------------------------------

// escuchar el evento cuando se envia
formTareas.addEventListener("submit", (event) => {
    // No envies el formulario para realizar antes
    event.preventDefault();
    addTask();

});

// -------------------------------
// Iniciar nuestro programa  
//---------------------------------
showTasks();