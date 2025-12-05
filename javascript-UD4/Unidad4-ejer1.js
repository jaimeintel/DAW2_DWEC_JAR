let alumno = {
    edad: 18,
    admin: false,
    stats : {
        posts: 0,
        followers: 0
    }
};

// Todos los apartados que pidan mostrar un resultado será en un párrafo de la página con id “output” 

function mostrarObjeto(obj){
    // recorrer el objeto
    for (let key in obj){
        if(typeof obj[key] == "object"){
            output.innerHTML += `<br> Propiedad ${key} es un objeto con los siguientes valores: `
            for (let subKey in obj[key]){
                output.innerHTML += `<br>${subKey} :  ${obj[key][subKey]}`
            }
        }
        else{
            output.innerHTML += `<br ${key} : ${obj[key]}`;
        }
    }

}

// • Incrementa el número de posts en 2 y de followers en 3.

alumno.stats.posts += 2
alumno.stats.followers += 3

//alert(alumno.stats.posts)
//alert(alumno.stats.followers)

// • Cambia el permiso de administrador a “true” y muestra el resultado en el párrafo.

alumno.admin = true;
alert (alumno.admin)

let output = document.getElementById("output");
output.innerHTML += `Propiedad admin (después del cambio):  ${alumno.admin}`

// • Quita la propiedad de administrador.

delete alumno.admin

// 
mostrarObjeto(alumno);

output.innerHTML += "<br>"