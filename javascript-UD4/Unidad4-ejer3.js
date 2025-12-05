let alumno = {
    edad: 18,
    admin: false,
    stats : {
        posts: 0,
        followers: 0
    },


// metodo para incrementar stats solo si se reciben los valores adecuados 
incrementarStats (tipo, n){
    if(this.stats?.[tipo] != undefined){
        if(typeof n == "number" && !isNaN(n)){
            this.stats[tipo]+= n;
        }
    }
}

};
alumno.incrementarStats(posts, 5);

