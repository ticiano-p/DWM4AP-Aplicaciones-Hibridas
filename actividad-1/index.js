const Alumno = require('./Alumno.js'); 
const A1 = new Alumno();

//mostrarCarrera
let carrera = A1.getcarrera();
console.log( carrera );

//Nombre()
let Nombre = A1.getnombre();
let Apellido = A1.getapellido();
console.log( `Mi nombre es: ${Nombre} ${Apellido}` );

//modificarEdad()
let edad1 = A1.getedad();
A1.setedad( 20)
let edad2 = A1.getedad();
console.log(  `Mi edad anterior era: ${edad1} y ahora: ${edad2}` );

//agregarMateria()

let materias = A1.getmaterias();
materias.push('Portales y Comercio Electrónico')
A1.setmaterias(materias); 
console.table( materias );
 


