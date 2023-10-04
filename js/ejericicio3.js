function diasHasta(fecha){
    //array con los ms que hay en un mes, un día, una hora, un minuto y un segundo
    var equivalenciams=[1000*60*60*24*30,1000*60*60*24, 1000*60*60, 1000*60, 1000 ];
    var respuesta=new Array(equivalenciams.length);

    // Obtenemos la fecha en el instante acutal
    fechaActual = new Date();
    
    // Realizamos los cálculos para obtener todos los datos del tiempo entre la 
    // fecha actual y la fecha dada como final
    var ms = fecha - fechaActual;

    for (let i=0; i< equivalenciams.length;i++){
        respuesta[i]=Math.floor(ms/equivalenciams[i]);
        ms=ms%equivalenciams[i];
    }

    // Devolvemos una cadena formateada con la información
    return respuesta[0] +" meses, "+respuesta[1] + " días, " + respuesta[2] + " horas, " + respuesta[3] + " minutos y " + respuesta[4] + " segundos";
}

const hoy = new Date();

var mes= prompt("Introduce tu mes de nacimiento");
var dia= prompt("Introduce tu día de nacimiento");

var cumple= new Date(hoy.getFullYear(), mes-1, dia);

if (cumple<hoy) 
    cumple.setFullYear(hoy.getFullYear()+1);

//por el primer método
console.log (diasHasta(cumple));

const dias =
[
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"
]
//día de la semana
console.log ("Tu próximo cumple será "+ dias[cumple.getDay()]);