// Listas de pronombres, adjetivos y sustantivos
const pronombres = ["el", "la", "los", "las"];
const adjetivos = ["grande", "pequeño", "rápido", "lento"];
const sustantivos = ["gato", "perro", "ciudad", "árbol"];
const extensiones = [".com", ".net", ".org", ".io"];

let dominios = "";

// Generar todas las combinaciones posibles de nombres de dominio
function generarNombresDeDominio(pronombres, adjetivos, sustantivos, extensiones) {
    

    
    for (let index = 0; index < pronombres.length; index++) {
        const element1 = pronombres[index];
        for (let index = 0; index < adjetivos.length; index++) {
            const element2 = adjetivos[index];
            for (let index = 0; index < sustantivos.length; index++) {
                const element3 = sustantivos[index];
                for (let index = 0; index < extensiones.length; index++) {
                    const element4 = extensiones[index];
                    dominios = element1 + element2 + element3 + element4;
                    console.log(dominios);               
                    
                }
               
            }
        }        
    }

    return dominios;
}


  const nombresDeDominio = generarNombresDeDominio(pronombres, adjetivos, sustantivos, extensiones);
 

