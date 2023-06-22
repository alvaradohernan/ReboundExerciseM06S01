let chile = []  // nuevo array

let arica = [  // array antiguo
{
"nombre": "Arica",
"region": "Arica y Parinacota",
"provincia": "Arica",
"distrito": "1"
}
]


let santiago = [ // array antiguo
{
"nombre": "Santiago",
"region": "Metropolitana de Santiago",
"provincia": "Santiago",
"distrito": "10"
}
]


const unirobjetosdeArray = () => {  // función para imprimir por consola los objetos existentes en los arrays.
    console.log(`Cantidad de objetos inicial: ${chile.length}`);
    chile.push(...arica, ...santiago);
    console.log(`Cantidad de objetos final: ${chile.length}`);
    console.log(chile);
}

unirobjetosdeArray();


