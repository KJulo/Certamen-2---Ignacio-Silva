 

interface Persona {
    nombreCompleto: any,
    edad?: any;
    genero?: any,
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

let ultimosSignos = ["estatura","peso","frecuencia cardiaca"];

$(function(){

    //Asignar etiquetas al perfil
    $("#informacion-perfil").append(`<p class="w-100">${persona['nombreCompleto']}</p>`);
    $("#informacion-perfil").append(`<p class="w-100">${persona['nacimiento']}</p>`);
    $("#informacion-perfil").append(`<button class="btn" id="editarButton">Editar</button>`);

    $("#antecedentes-perfil").append(`<div id="contenidos-antecedentes0" class="row"></div>`);
    $(`#contenidos-antecedentes0`).append(`<i class="shape51 col-3"></i>`);
    $(`#contenidos-antecedentes0`).append(`<li class="me-4 col-3">Estatura</li>`);
    $(`#contenidos-antecedentes0`).append(`<li class="me-4 col-3" id="estatura">${persona.estatura}</li>`);
    
    $("#antecedentes-perfil").append(`<div id="contenidos-antecedentes1" class="row"></div>`);
    $(`#contenidos-antecedentes1`).append(`<i class="shape51 col-3"></i>`);
    $(`#contenidos-antecedentes1`).append(`<li class="me-4 col-3">Peso</li>`);
    $(`#contenidos-antecedentes1`).append(`<li class="me-4 col-3" id="peso">${persona.peso}</li>`);
    
    $("#antecedentes-perfil").append(`<div id="contenidos-antecedentes2" class="row"></div>`);
    $(`#contenidos-antecedentes2`).append(`<i class="shape51 col-3"></i>`);
    $(`#contenidos-antecedentes2`).append(`<li class="me-4 col-3">Frecuencia Cardiaca</li>`);
    $(`#contenidos-antecedentes2`).append(`<li class="me-4 col-3" id="frecuencia">${persona.frecuenciaCardiaca}</li>`);


    for (let indice in antecedentes){
        $("#row-clinicos-mostrar").append(`<p class="col-9" id="p-top${indice}">${antecedentes[indice].fecha}</p>`);
        $("#row-clinicos-mostrar").append(`<button type="button" class="btn col-3" id="botonEliminar"><span class="material-icons-outlined">delete</span>`);
        $("#row-clinicos-mostrar").append(`<p class="border-bottom border-dark col-9">${antecedentes[indice].motivo}</p>`);
        $("#row-clinicos-mostrar").append(`<p class="align-self-center col-3">Eliminar</p>`);
        if (indice == "0"){
            $("#p-top0").addClass("border-top border-dark");
        }
        $("#antecedentes-clinicos-editar-mostrar").append(`<div id="antecedentes-editar-flex" class="d-flex flex-wrap"></div>`);
        $("#antecedentes-editar-flex").append(`<div id="clinicos-editar-mostrar-div${indice}" class="d-flex flex-wrap border w-75"></div>`)
        $(`#clinicos-editar-mostrar-div${indice}`).append(`<p class="w-100">${antecedentes[indice].motivo}`);
        $(`#clinicos-editar-mostrar-div${indice}`).append(`<p class="w-90 me-5">${antecedentes[indice].fecha}`);
        $(`#antecedentes-editar-flex`).append(`<button type="button" class="btn w-5" id="botonEliminar">Eliminar<span class="material-icons-outlined">delete</span>`);
    }
});


$("#editarButton").on('click',function(event:any){
    if ($("#formulario").attr("style") == "display: none;"){
        $("#antecedentes-clinicos-mostrar").hide();
        $("#antecedentes-clinicos-editar-mostrar").show();
        
        $("#formulario").show();
            $(`#contenidos-antecedentes${0}`).remove();
            $("#antecedentes-perfil").append(`<div id="contenidos-antecedentes${0}" class="row"></div>`);
            $(`#contenidos-antecedentes${0}`).append(`<i class="shape51 col-3"></i>`);
            $(`#contenidos-antecedentes${0}`).append(`<li class="me-4 col-3">Estatura</li>`);
            $(`#contenidos-antecedentes${0}`).append(`<textarea class="me-4 col-3" id="estatura">${persona.estatura}</textarea>`);

            $(`#contenidos-antecedentes${1}`).remove();
            $("#antecedentes-perfil").append(`<div id="contenidos-antecedentes${1}" class="row"></div>`);
            $(`#contenidos-antecedentes${1}`).append(`<i class="shape51 col-3"></i>`);
            $(`#contenidos-antecedentes${1}`).append(`<li class="me-4 col-3">Peso</li>`);
            $(`#contenidos-antecedentes${1}`).append(`<textarea class="me-4 col-3" id="peso">${persona.peso}</textarea>`);

            $(`#contenidos-antecedentes${2}`).remove();
            $("#antecedentes-perfil").append(`<div id="contenidos-antecedentes${2}" class="row"></div>`);
            $(`#contenidos-antecedentes${2}`).append(`<i class="shape51 col-3"></i>`);
            $(`#contenidos-antecedentes${2}`).append(`<li class="me-4 col-3">Frecuencia cardiaca</li>`);
            $(`#contenidos-antecedentes${2}`).append(`<textarea class=" ms-3 col-3" id="frecuenciaCardiaca">${persona.frecuenciaCardiaca}</textarea>`);

            
    }
    else {
        $("#formulario").hide();
        $("#antecedentes-clinicos-mostrar").show();
        $("#antecedentes-clinicos-editar-mostrar").hide();

        $(`#contenidos-antecedentes${0}`).remove();
        $("#antecedentes-perfil").append(`<div id="contenidos-antecedentes0" class="row"></div>`);
        $(`#contenidos-antecedentes0`).append(`<i class="shape51 col-3"></i>`);
        $(`#contenidos-antecedentes0`).append(`<li class="me-4 col-3">Estatura</li>`);
        $(`#contenidos-antecedentes0`).append(`<li class="me-4 col-3" id="estatura">${persona.estatura}</li>`);
        
        $(`#contenidos-antecedentes${1}`).remove();
        $("#antecedentes-perfil").append(`<div id="contenidos-antecedentes1" class="row"></div>`);
        $(`#contenidos-antecedentes1`).append(`<i class="shape51 col-3"></i>`);
        $(`#contenidos-antecedentes1`).append(`<li class="me-4 col-3">Peso</li>`);
        $(`#contenidos-antecedentes1`).append(`<li class="me-4 col-3" id="peso">${persona.peso}</li>`);
        

        $(`#contenidos-antecedentes${2}`).remove();
        $("#antecedentes-perfil").append(`<div id="contenidos-antecedentes2" class="row"></div>`);
        $(`#contenidos-antecedentes2`).append(`<i class="shape51 col-3"></i>`);
        $(`#contenidos-antecedentes2`).append(`<li class="me-4 col-3">Frecuencia Cardiaca</li>`);
        $(`#contenidos-antecedentes2`).append(`<li class="me-4 col-3" id="frecuencia">${persona.frecuenciaCardiaca}</li>`);
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


function checkFormulario(input:any){
    return false
}


function ValidarRut(valor:any){
    var tmp=valor.split('-');
    let digito=tmp[1];
    let rut=tmp[0];
    if(digito=='K') digito='k';
    var M=0,S=1;
    for(;rut;rut=Math.floor(rut/10))
      S=(S+rut%10*(9-M++%6))%11;
      console.log(S?S-1:'k');

   return S?S-1:'k';
}

$("#enviarFormulario").on('click',function(event:any){
    
    let aux:Persona;
    let formularioFinal:boolean = true, formulario:boolean = false;
    
    $("#formulario input").each(function(){
        let valor = $(this);
        if (!checkFormulario($(this))){
            formularioFinal=false;
        }
        
        switch (valor.attr("id")){
            case "nombreCompleto":aux.nombreCompleto= valor.val();
            case "edad": aux.edad = valor.val()?.toString();
            case "nacimiento": aux.nacimiento = valor.val()?.toString();
            case "correo": aux.correo = valor.val()?.toString();
            case "numeroTel": aux.correo = valor.val()?.toString();
            case "rut": aux.rut = valor.val()?.toString();
        }
    });

    if (formularioFinal == true){
        $("#formulario").hide();
        aux = persona;
    }

})



