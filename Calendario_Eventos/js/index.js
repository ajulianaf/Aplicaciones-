//definicion de variables
const mesesBtn = document.getElementsByClassName ('mes');


//definicion de funciones
function calcularDias(mes){
    const ultimoDia = (new Date(2024,mes,0)).getDate();
    let dias = "";
    for (let i=1;i<=ultimoDia;i++) {
        dias+="<div>";
        dias+=i;
        dias+="</div>";
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
