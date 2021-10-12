define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    var persona = {
        "nombre completo": "Pepito Perez",
        "edad": "43",
        "genero": "Sin definir",
        "nacimiento": "21/09/1979",
        "correo": "pepito.perez@email.com",
        "numero tel": "912345678",
        "rut": "11111111-1",
        "region": "Valparaiso",
        "comuna": "vina del mar",
        "estatura": 1.75,
        "peso": 70,
        "frecuencia cardiaca": 70,
    };
    var antecedentes = [{
            "motivo": "Hospitalizado por bronquitis",
            "fecha": "23/05/2005"
        }, {
            "motivo": "Hospitalizado por intoxicacion",
            "fecha": "23/05/2008"
        }, {
            "motivo": "Hospitalizado XXXXXXXXXX",
            "fecha": "XX/XX/XXXX"
        }];
    $(function () {
        console.log("hola");
    });
});
