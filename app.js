"use strict";

/*
Grundsystem der Anwendung
*/

// class App {
//
//     constructor () {
//         this._daten =
//             [
//                 vorname: "Albert",
//                 nachname: "Einstein",
//                 geburtsdatum: "01.01.2000",
//                 tel: "123456",
//                 adresse: "lulweg 1",
//                 satz: "I bims, albert vong einstein her"
//             ]
//     }
//
// }
    //Polaroid-Variabeln
    // let profilBild = document.getElementById("portrait");
    // let freund = document.getElementsByClassName("eingabe");
    // console.log(freund);
    // let ganzerName = freund[0]+" "+freund[1];
    //
    // let zuLang = (ganzerName) => {
    //   let nameStyle = document.getElementById("name2");
    //   if (ganzerName.lenght > 17){
    //     nameStyle.style.fontSize = "0.3em";
    // }
    //
    let freund = ["karl","napf","47","knapf@gmx.de","sandweg1","8323"];
    let dElement = document.createElement("div")

    let erstellePolaroid = () => {

      let temp, item, a, i;
      temp = document.getElementsByTagName("template")[3];
      item = temp.content.querySelector("label");

      for(i = 0; i< 2; i++){
        a = document.importNode(item,true);
        a.textContent += freund[i];
        document.body.appendChild(a);
      }

    }








    //
    // //variablen von visitenkarte deklarieren
    // var firstname = getElementById("firstname");
    // var surname = getElementById("surname");
    // var age = getElementById("age");
    // var email = getElementById("emnail");
    // var adress = getElementById("adress");
    // var phone = getElementById("phone");
    // var sentence = getElementById("sentence");
    // //Polaroids
    //
    // submit-button
    submit.addEventListener("click", addFreund);
    //
    // //Funktion zum adden von
    // function addFreund() {
    //   if (firstname == "" || surname == "" || age == "" || email == ""
    //       || adress == "" || phone == "" || sentence == ""){
    //         alter.("Du musst alle Felder ausfüllen");
    //       }
    //   else (
    //     var text = firstname.value;
    //     // hier noch die variable übergeben....
    //   )
    // }





    // HALIL
    let realFileBtn = document.getElementById("real-file");
    let customBtn = document.getElementById("custom-button");
    let customTxt = document.getElementById("custom-text");

    customBtn.addEventListener("click", function() {
      realFileBtn.click();
    });

    realFileBtn.addEventListener("change", function() {
      if (realFileBtn.value) {
        customTxt.innerHTML = realFileBtn.value.match(
          /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
      } else {
        customTxt.innerHTML = "No file chosen, yet.";
      }
    });
