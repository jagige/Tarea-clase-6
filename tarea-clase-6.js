/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

function grupo(numero){
    const familiar = document.createElement('label');//creo un label
    familiar.textContent ="Edad del familiar nº "+numero+":";//escribo el texto del label
    const input = document.createElement('input');//creo un nuevo cuadro de texto
    familiar.appendChild(input).type="number";//agrego al label pidiendo que sea de números
    const br = document.createElement('br');//creo un br para separar
    familiar.appendChild(br)
    const $edadIntegrantes = document.querySelector("#edadIntegrantes");//selecciono el div
return $edadIntegrantes.appendChild(familiar);//digo que el div tenga dentro el label con su texto
}


/* Esto es lo que agrego en el html
<label>Edad del integrante nº 1:
    <input type="number"><br>
</label>
*/

grupo(1);
grupo(2);
grupo(45);

