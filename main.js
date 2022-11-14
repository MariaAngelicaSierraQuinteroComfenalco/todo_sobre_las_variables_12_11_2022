addEventListener(`DOMContentLoaded`, (e)=>{

    document.querySelector("body").innerHTML = "BIENVENIDOS";
    document.querySelector("body").innerHTML = "Usario porfavor revisar consola (oprimir tecla f12)";

    
    let miNombre ="Maria Angelica";   
    console.group("¿Cuales son tus nombres?");
    console.log(miNombre);
    console.groupEnd();

    let miApellido ="Sierra Quintero";   
    console.group("¿Cuales son tus Apellidos?");
    console.log(miApellido);
    console.groupEnd();

    let miEdad = 17;   
    console.group("¿Cual es tu edad?");
    console.log(miEdad);
    console.groupEnd();

    let Estudio =true ;   
    console.group("¿Eres estudiante?");
    console.log(Estudio);
    console.groupEnd();

    let meGraduare=null;  
    console.group("¿Me graduare de mi carrera?");
    console.log(meGraduare);
    console.groupEnd();
    
    let estudiarOtroPrograma
    console.group("¿Como se llama el progrma que estudiare?");
    console.log(estudiarOtroPrograma)
    console.groupEnd();
  


    let mascota ={Clase:"gata",Nombre:"Hera",Edad:"4 años",Peso: "4kg"}

    console.group("Caracteristicas de tu mascota");
    console.log(mascota);
    console.groupEnd();

})
