"use strict";

/*
Grundsystem der Anwendung
*/

class App {

    constructor () {
        this._daten =
            [
                vorname: "Albert",
                nachname: "Einstein",
                geburtsdatum: "01.01.2000",
                tel: "123456",
                adresse: "lulweg 1",
                satz: "I bims, albert vong einstein her"
            ]
    }

    













    // Ja ok, ich hab die falsche Aufgabe gemacht xD
    //variablen deklarieren
    var firstname = getElementById("firstname");
    var surname = getElementById("surname");
    var age = getElementById("age");
    var email = getElementById("emnail");
    var adress = getElementById("adress");
    var phone = getElementById("phone");
    var sentence = getElementById("sentence");

    // submit-button
    submit.addEventListener("click", addFreund);

    //Funktion zum adden von
    function addFreund() {
      if (firstname === "" || surname === "" || age === "" || email === ""
          || adress === "" || phone === "" || sentence === ""){
            alter.("Du musst alle Felder ausfüllen");
          }
      else (
        var text = firstname.value;
        // hier noch die variable übergeben....
      )
    }

}
