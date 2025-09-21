let nombre = "John";
let apellido = "Doe";
let edadIncioCurso = 18;
let numeroCursos = 1;

nombre = prompt("Introduce tu nombre:");
apellido = prompt("Introduce tu primer apellido:");
edadIncioCurso = prompt("¿Qué edad tenías al iniciar el curso?"); 
numeroCursos = prompt("¿Cuántos años te ha llevado acabar el curso?");

console.log(typeof nombre + " " + typeof apellido + " " + typeof edadIncioCurso + " " + typeof numeroCursos); /* String String String String */
console.log(nombre + "\n" + apellido);
console.log("Edad: " + (parseInt(edadIncioCurso) + parseInt(numeroCursos)) + " años cuando termine el curso.");