 

interface Persona {
    nombreCompleto?: string,
    edad?: string;
    genero?: string,
    nacimiento?: string,
    correo?: string,
    numeroTel?: string,
    rut?: string,
    region?: string,
    comuna?: string,
    estatura?: number,
    peso?: number,
    frecuenciaCardiaca?: number;
    

}

let persona :Persona= {
    "nombreCompleto":"Pepito Perez",
    "edad": "43",
    "genero": "Sin definir",
    "nacimiento": "21/09/1979",
    "correo": "pepito.perez@email.com",
    "numeroTel": "912345678",
    "rut": "11111111-1",
    "region": "Valparaiso",
    "comuna": "vina del mar",
    "estatura": 1.75,
    "peso": 70,
    "frecuenciaCardiaca": 70,


}

let antecedentes = [{
        "motivo":"Hospitalizado por bronquitis",
        "fecha":"23/05/2005"
    },{
        "motivo":"Hospitalizado por intoxicacion",
        "fecha":"23/05/2008"
    },{
        "motivo":"Hospitalizado XXXXXXXXXX",
        "fecha":"XX/XX/XXXX"
}]

let ultimosSignos:string[] = ["estatura","peso","frecuencia cardiaca"];

$(function(){
    //Asignar etiquetas al perfil
    
    $("#informacion-perfil").append(`<p class="w-100">${persona['nombreCompleto']}</p>`);
    $("#informacion-perfil").append(`<p class="w-100">${persona['nacimiento']}</p>`);
    $("#informacion-perfil").append(`<button class="btn" id="editarButton">Editar</button>`);

    $("#antecedentes-perfil").append(`<div id="contenidos-antecedentes0" class="row"></div>`);
    $(`#contenidos-antecedentes0`).append(`<i class="shape51 col-3"></i>`);
    $(`#contenidos-antecedentes0`).append(`<li class="me-4 col-3">Estatura</li>`);
    $(`#contenidos-antecedentes0`).append(`<li class="me-4 col-3">${persona.estatura}</li>`);
    
    $("#antecedentes-perfil").append(`<div id="contenidos-antecedentes1" class="row"></div>`);
    $(`#contenidos-antecedentes1`).append(`<i class="shape51 col-3"></i>`);
    $(`#contenidos-antecedentes1`).append(`<li class="me-4 col-3">Peso</li>`);
    $(`#contenidos-antecedentes1`).append(`<li class="me-4 col-3">${persona.peso}</li>`);
    
    $("#antecedentes-perfil").append(`<div id="contenidos-antecedentes2" class="row"></div>`);
    $(`#contenidos-antecedentes2`).append(`<i class="shape51 col-3"></i>`);
    $(`#contenidos-antecedentes2`).append(`<li class="me-4 col-3">Frecuencia Cardiaca</li>`);
    $(`#contenidos-antecedentes2`).append(`<li class="me-4 col-3">${persona.frecuenciaCardiaca}</li>`);


    for (let indice in antecedentes){
        $("#row-clinicos-mostrar").append(`<p class="col-9" id="p-top${indice}">${antecedentes[indice].motivo}</p>`);
        $("#row-clinicos-mostrar").append(`<button type="button" class="btn col-3" id="${indice}"><span class="material-icons-outlined">delete</span>`);
        $("#row-clinicos-mostrar").append(`<p class="border-bottom border-dark col-9">${antecedentes[indice].fecha}</p>`);
        $("#row-clinicos-mostrar").append(`<p class="align-self-center col-3">Eliminar</p>`);
        if (indice == "0"){
            $("#p-top0").addClass("border-top border-dark");
        }
    }
});


$("#editarButton").on('click',function(event:any){
    if ($("#formulario").attr("style") == "display: none;"){
        $("#antecedentes-clinicos-mostrar").hide();
        $("#formulario").show();
    }
    else {
        $("#formulario").hide();
        $("#antecedentes-clinicos-mostrar").show();
    }
});

$("#regiones").on('change',function(event:any){
    $("#comunas").empty();
    if ($(this).val() === "valparaiso"){
        $("#comunas").append(`<option value="viña del mar">Viña del mar</option>`)
        $("#comunas").append(`<option value="valparaiso">Valparaiso</option>`)
    }
    if ($(this).val() === "santiago"){
        $("#comunas").append(`<option value="las condes">Las condes</option>`)
        $("#comunas").append(`<option value="maipu">Maipu</option>`)
    }
});


$("#button-add-antecedentes").on('click',function(event:any){
    if ($("#antecedentes-clinicos-editar").attr("style") == "display: none;"){
        $("#antecedentes-clinicos-editar").show();
    }else{
        $("#antecedentes-clinicos-editar").hide();
    }
});

