let tablaTarea = [];

//Creación de las Tareas
function agregarTarea(){
  const nuevaTarea = document.getElementById('agenTarea').value.trim();
  if(nuevaTarea!==''){
    tablaTarea.push({texto: nuevaTarea, completada: false});
    renderizarTarea();
    document.getElementById('agenTarea').value='';
  }
}

//Impresión de las Tareas
function renderizarTarea(){
  const listaTarea = document.getElementById('listaTarea');
  listaTarea.innerHTML = '';
  tablaTarea.forEach((tarea, index) => {
    const li = document.createElement('li');
    li.textContent = tarea.texto; 

    //Botón Editar
    const editarBtn = document.createElement('button');
    editarBtn.textContent = 'Editar';
    editarBtn.className = 'editar';
    editarBtn.onclick = () => editarTarea(index);
    //Botón Eliminar
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.className = 'eliminar';
    eliminarBtn.onclick = () => eliminarTarea(index);
    //Botón Completar
    const completarBtn = document.createElement('button');
    completarBtn.textContent = 'Pendiente';
    completarBtn.id = 'completar';
    completarBtn.addEventListener ('click',function() {
      this.textContent = 'Terminada';
      this.disabled = false;
    });
    li.appendChild(editarBtn);
    li.appendChild(eliminarBtn);
    li.appendChild(completarBtn);
    listaTarea.appendChild(li);
  });
}

//Editar Tareas
function editarTarea(index){
  const nuevaNuevaTarea = prompt('Digite el nuevo nombre de la tarea','');
  if(nuevaNuevaTarea !== null) {
    tablaTarea[index].texto = nuevaNuevaTarea.trim();
    renderizarTarea();
  }
}

//Eliminar Tareas
function eliminarTarea(index){
  tablaTarea.splice(index, 1);
  renderizarTarea();
}