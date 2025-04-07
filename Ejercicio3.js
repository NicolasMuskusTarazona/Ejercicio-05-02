// ### **3️⃣ Iteración y comparación de objetos**  
// - [ ] **Iterar las propiedades de un objeto** y mostrarlas en consola.  
// - [ ] **Comparar dos objetos** para verificar si son iguales.  
// - [ ] **Comparar dos propiedades de objetos** para ver si son iguales.

let persona1 = { nombre: "Nicolas", edad: 17 };
let persona2 = { nombre: "Danilo", edad: 17 };


for (let iterar in persona1){
    console.log(`Persona 1: ${persona1[iterar]}`)
}

for (let iterar in persona2){
    console.log(`Persona 2: ${persona2[iterar]}`)
}

let Comparar =(JSON.stringify(persona1) === JSON.stringify(persona2));
if(Comparar){
    console.log("Las personas son iguales.")
}else{
    console.log("Las personas son diferentes.")
}
let Comparar =(JSON.stringify(persona1) === JSON.stringify(persona2));
if(Comparar){
    console.log("Las personas son iguales.")
}else{
    console.log("Las personas son diferentes.")
}

let CompararNombres =(JSON.stringify(persona1.nombre) === JSON.stringify(persona2.nombre));
if(CompararNombres){
    console.log("Las personas tienen nombres diferentes.")
}else{
    console.log("Las personas tienen nombres diferentes.")
}

let CompararEdad =(JSON.stringify(persona1.edad) === JSON.stringify(persona2.edad));
if(CompararEdad){
    console.log("Las personas tienen la misma edad.")
}else{
    console.log("Las personas tienen edad diferente.")
}