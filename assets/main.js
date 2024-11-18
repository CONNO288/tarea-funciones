const notas =[6,8,9,2,5,10];

// Funciones suma
const sumando = (a,b,c,d,e,f) => a+b+c+d+e+f;
console.log ("La suma de las notas según la función con retorno explícito es: " + sumando(6,8,9,2,5,10));

const sumando_2 = () => {
    let suma = notas[0]+notas[1]+notas[2]+notas[3]+notas[4]+notas[5]; 
    return suma  
}
console.log ("La suma de la función con array es: " + sumando_2());

// Funciones promedio

const promedio = () => {
    let prom = sumando_2()/notas.length;
    return prom
}

console.log ("El promedio de notas es: " + promedio())
