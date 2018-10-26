"use strict";

/*
Grundsystem der Anwendung
*/

class App {

    constructor () {
        this._daten = [
            {
                vorname: "",
                nachname: "",
                geburtsdatum: "",
                tel: "",
                adresse: "",
                satz: ""
            },
            {
                vorname: "Albert",
                nachname: "Einstein",
                geburtsdatum: "01.01.2000",
                tel: "123456",
                adresse: "lulweg 1",
                satz: "I bims, albert vong einstein her"
            }
        ];
    }
    function myFunction() {
      var element = document.getElementById("visitenkartePLUS");
      element.classList.add("mystyle");
    }
}
