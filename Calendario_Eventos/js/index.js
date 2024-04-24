//definicion de variables
const mesesBtn = document.getElementsByClassName ('mes');


//definicion de funciones

function calcularDias(mes){
    const ultimoDia = (new Date(2024,mes,0)).getDate();
    let dias = "";
    for (let i=1;i<=ultimoDia;i++) {
        dias+="<section>";
        dias+=i;
        dias+="</section>";
    }
    document.getElementById('dias').innerHTML=dias;

}


// definicion de eventos
[...mesesBtn].forEach((element,index) => {
        element.addEventListener('click', () =>{
        calcularDias(index+1);
        console.log(dias);
    })
});


let datosFormulario = [];

function envioFormulario(event) {
    event.preventDefault();

    const nom = document.getElementById ('nomEvent').value;
    const fecha = document.getElementById ('fechaEvent').value;
    const datos = [nom, fecha]

    datosFormulario.push(datos);

    document.getElementById('formularioEvento').reset();
    console.log(datosFormulario);

    agregarFila(nom, fecha);

};

function agregarFila(nom,fecha) {
    const tabla = document.getElementById('tablaDatos');
    const fila = tabla.insertRow();

    const celdaNom = fila.insertCell();
    celdaNom.textContent = nom;

    const celdaFecha = fila.insertCell();
    celdaFecha.textContent=fecha;

    const celdaElim = fila.insertCell();
    celdaElim.innerHTML = '<button onclick = "eliminarFila(this)">Eliminar</button>';

}

function  eliminarFila(btnEliminar) {
    const fila = btnEliminar.closest ('tr');
    fila.remove();
}

document.getElementById('formularioEvento').addEventListener('submit',envioFormulario);

