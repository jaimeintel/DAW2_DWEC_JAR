let alumno = {
    edad: 18,
    admin: false,
    stats : {
        posts: 0,
        followers: 0
    }
};

let copiaAlumno = structuredClone(alumno)

function mostrarObjeto(obj){
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

alumno.stats.posts += 1
mostrarObjeto(alumno)
mostrarObjeto(copiaAlumno)





