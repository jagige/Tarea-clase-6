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
const $resultados = document.querySelector("#resultados");
const $edadIntegrantes = document.querySelector("#edadIntegrantes");//selecciono el div

function crearCampoEdades(numero){
    const familiar = document.createElement('label');//creo un label
    familiar.textContent ="Edad del familiar nº "+numero+":";//escribo el texto del label
    const input = document.createElement('input');//creo un nuevo cuadro de texto
    familiar.appendChild(input).type="number";//agrego al label pidiendo que sea de números
    input.setAttribute("class","edadesFamilia")//digo que los input tengan clase edadesFamilia
    const br = document.createElement('br');//creo un br para separar
    familiar.appendChild(br)//agrego el br
return $edadIntegrantes.appendChild(familiar);//digo que el div tenga dentro el label con su texto, input y br
}

/* Esto es lo que la función agrega en el html
<label>Edad del integrante nº 1:
    <input type="number"><br>
</label>
*/
const $botonCalcular = document.querySelector("#botonCalcular");
const $botonEnviar = document.querySelector("#botonEnviar");
//Atrapo el número de integrantes para crear la misma cantidad de cuadros
//Al mismo tiempo aparece el botón calcular
$botonEnviar.onclick = function(){
   let $grupoFamiliar = Number(document.querySelector("#grupoFamiliar").value);
   
console.log($grupoFamiliar)
   if($grupoFamiliar == 0){
    $botonCalcular.style.display = "none";
    document.querySelector("#advertencia").textContent = "Debe ingresar un número"
   }else {
    $botonCalcular.style.display = "block";
    document.querySelector("#advertencia").innerHTML ="";
   }

   if($edadIntegrantes.innerHTML === ""){
    for(let i=0; i<$grupoFamiliar; i++){
        crearCampoEdades(i+1);
    }
    }else{$edadIntegrantes.innerHTML = "";
        for(let i=0; i<$grupoFamiliar; i++){
         crearCampoEdades(i+1);
        }
    }
   
}

//Botón para reiniciar, también oculta el botón calcular
const $botonBorrar = document.querySelector("#botonBorrar");
$botonBorrar.onclick = function(){
    $edadIntegrantes.innerHTML = "";
    $botonCalcular.style.display = "none";
    $resultados.style.display = "none"
}

//Obtengo los NodeList de la clase edadesFamilia y lo convierto en numeros para
//agregarlo a un array, teniendo en cuenta que el campo vacio se reemplace por cero
// para que no afecte al calculo del promedio
$botonCalcular.onclick = function(){
    let $edadesFamilia = document.querySelectorAll(".edadesFamilia");
    const arrayEdadesFamilia = []
    for(let i=0; i<$edadesFamilia.length; i++){
        arrayEdadesFamilia.push(parseInt($edadesFamilia[i].value));
        if($edadesFamilia[i].value === ""){
            arrayEdadesFamilia.pop();
            arrayEdadesFamilia.push(0);
        }
      }
      console.log(arrayEdadesFamilia);
 //una vez obtenido los numeros empiezo a clcular


    let acumulador=0;
     for(let i=0; i<arrayEdadesFamilia.length; i++){
     acumulador += arrayEdadesFamilia[i];
    }

console.log("numero maximo "+ Math.max(...arrayEdadesFamilia));
console.log("numero minimo "+ Math.min(...arrayEdadesFamilia));
console.log("el promedio "+ acumulador/arrayEdadesFamilia.length);
 $resultados.style.display = "block"
 document.querySelector("#mayorEdad").textContent = Math.max(...arrayEdadesFamilia);
 document.querySelector("#menorEdad").textContent = Math.min(...arrayEdadesFamilia);
 document.querySelector("#promedioEdad").textContent = acumulador/arrayEdadesFamilia.length;
}


