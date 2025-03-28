class alumno {
    nombre= 'Ticiano'
    apellido= 'Piccino Pujol'
    edad= 19
    carrera= ' Diseño y programacion WEB'
    materias= ['Aplicaciones Híbridas']
  
    //get
    getnombre(){
        return this.nombre
    }
    getapellido(){
        return this.apellido
    }
    getedad(){
        return this.edad
    }
    getcarrera(){
        return this.carrera
    }
    getmaterias(){
        return this.materias
    }
    //set
     setnombre(nombre){
        this.nombre = nombre;
    }
    setapellido(apellido){
        this.apellido = apellido;
    }
    setedad(edad){
        this.edad = edad;
    }
    setcarrera(carrera){
        this.carrera = carrera;
    }
    setmaterias(materias){
        this.materias = materias;
    }
}
module.exports = alumno;