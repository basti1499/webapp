//
// /*
// Grundsystem der Anwendung

//Objekt für die Person
 let person = {
     firstName: "",
     lastName: "",
     age: "",
     email: "",
     adress: "",
     phone: "",
 }

//Array für die Objekte der Personen

let _daten = [];


//Daten von der Eintragsseite in das Array speichern
function savePerson(){

    let _vorname = document.getElementById("firstname").value;
    let _nachname = document.getElementById("surname").value;
    let _age = document.getElementById("age").value;
    let _email = document.getElementById("email").value;
    let _adresse = document.getElementById("address").value;
    let _telefon = document.getElementById("phone").value;
    let _person = {
        firstName: _vorname,
        lastName: _nachname,
        age: _age,
        email: _email,
        address: _adresse,
        phone: _telefon,
    }
    _daten.push(_person);

    console.log(_person);
    console.log(_daten);
}



//Funktionen zum anzeigen und verstecken von den verschiedenen Seiten
function hideDetails() {
    document.getElementById("detailanzeige").classList.add("hidden");
}

function showDetails() {
    document.getElementById("detailanzeige").classList.remove("hidden");
}

function hideEintrag() {
    document.getElementById("eintragsseite").classList.add("hidden");
}

function showEintrag() {
    document.getElementById("eintragsseite").classList.remove("hidden");
}

function hideUebersicht() {
    document.getElementById("uebersicht").classList.add("hidden");
}

function showUebersicht() {
    document.getElementById("uebersicht").classList.remove("hidden");
}




//Funktion zur Aktualisierung der Details auf einen bestimmten Freunde
function freundAnzeigen(id) {

    document.getElementById("detailVorname").innerHTML = _daten[id].firstName;
    document.getElementById("detailNachname").innerHTML = _daten[id].lastName;
    document.getElementById("detailAlter").innerHTML = _daten[id].age;
    document.getElementById("detailEmail").innerHTML = _daten[id].email;
    document.getElementById("detailAdresse").innerHTML = _daten[id].address;
    document.getElementById("detailTel").innerHTML = _daten[id].phone;

    showDetails();
    hideEintrag();
    hideUebersicht();
}





// */
//
// // class App {
// //
// //     constructor () {
// //         this._daten =
// //             [
// //                 vorname: "Albert",
// //                 nachname: "Einstein",
// //                 geburtsdatum: "01.01.2000",
// //                 tel: "123456",
// //                 adresse: "lulweg 1",
// //                 satz: "I bims, albert vong einstein her"
// //             ]
// //     }
// //
// // }
//     //Polaroid-Variabeln
//     // let profilBild = document.getElementById("portrait");
//     // let freund = document.getElementsByClassName("eingabe");
//     // console.log(freund);
//     // let ganzerName = freund[0]+" "+freund[1];
//     //
//     // let zuLang = (ganzerName) => {
//     //   let nameStyle = document.getElementById("name2");
//     //   if (ganzerName.lenght > 17){
//     //     nameStyle.style.fontSize = "0.3em";
//     // }
//     //
//     let freund = ["karl","napf","47","knapf@gmx.de","sandweg1","8323"];
//     console.log(freund);
//
//     // DackelStyle
//   // let dackelStyle = () => {
//       let newDiv = document.createElement("div");
//       newDiv.className = "col-lg-3";
//       newDiv.id = "cards";
//
//         let newAnk = document.createElement("a");
//         newAnk.href = "bestimmterFreund";
//
//         let newDiv2 = document.createElement("div");
//         newDiv2.class = "rahmen";
//
//           let newLabel = document.createElement("label");
//           newLabel.id = "name";
//
//           let newBild = document.createElement("img");
//           newBild.className = "polaroid";
//           newBild.src = "Bilder/boy.png";
//
//           //nun alles Verschachteln und anfügen
//           newLabel.appendChild(newBild);
//           newDiv2.appendChild(newLabel);
//           newAnk.appendChild(newDiv2);
//           newDiv.appendChild(newAnk);
//
//           console.log(newDiv);
//
//
//
//       // hier kommt noch die Referenz auf den eingegebenen Namen in die Methode.
//       let newDivText = document.createTextNode(freund[0]+" "+freund[1]);
//       console.log(newDivText);
//       console.log(newDiv);
//       newDiv.appendChild(newDivText);
//       //document.getElementById()
//
//       let pola = document.querySelector("#neuerFreund");
//       console.log(pola);
//       let pBild = document.querySelector(".polar");
//       console.log(pBild);
//       //let .polar.insertBefore(newDiv,pBild);
//
//   // }
//
//
//
//
//
//
//
//     // // Hier wird das Polaroid erstellt
//     // let erstellePolaroid = () => {
//     //
//     //   let temp, item, a, i;
//     //   temp = document.getElementsByTagName("template")[3];
//     //   item = temp.content.querySelector("label");
//     //
//     //   for(i = 0; i< 2; i++){
//     //     a = document.importNode(item,true);
//     //     a.textContent += freund[i];
//     //     document.body.appendChild(a);
//     //   }
//     //
//     // }
//
//
//
//
//
//
//
//
//     // submit-button
//   //  submit.addEventListener("click", addFreund);
//     //
//     // //Funktion zum adden von
//     // function addFreund() {
//     //   if (firstname == "" || surname == "" || age == "" || email == ""
//     //       || adress == "" || phone == "" || sentence == ""){
//     //         alter.("Du musst alle Felder ausfüllen");
//     //       }
//     //   else (
//     //     var text = firstname.value;
//     //     // hier noch die variable übergeben....
//     //   )
//     // }
//
//  // HALIL CONTAINER FÜR HINZUFÜGEN EINES NEUEN FREUNDES WENN DIE EINGABEN VOLLSTÄNDIG UND KORREKT SIND
//
//  let person = {
//      firstName: "",
//      lastName: "",
//      age: "",
//      email: "",
//      adress: "",
//      phone: "",
//  }
// let array = [person];
//
//
//
//
//
// // const bu = document.getElementById("submit");
// // console.log(bu);
// // bu.addEventListener("click", savePerson);
//
//
// function savePerson(){
// array.push()
// let vorname = document.getElementById("firstname").value;
// let nachname = document.getElementById("lastname").value;
// let email = document.getElementById("email").value;
// let adresse = document.getElementById("address").value;
// let telefon = document.getElementById("phone").value;
//
//
// document.getElementById("name").innerHTML =  testname;
// console.log("ich war hier");
// }
//
//
//
//
//     // HALIL BILD HOCHLADEN
//     // let realFileBtn = document.getElementById("real-file");
//     // let customBtn = document.getElementById("custom-button");
//     // let customTxt = document.getElementById("custom-text");
//     //
//     // customBtn.addEventListener("click", function() {
//     //   realFileBtn.click();
//     // });
//     //
//     // realFileBtn.addEventListener("change", function() {
//     //   if (realFileBtn.value) {
//     //     customTxt.innerHTML = realFileBtn.value.match(
//     //       /[\/\\]([\w\d\s\.\-\(\)]+)$/
//     //     )[1];
//     //   } else {
//     //     customTxt.innerHTML = "No file chosen, yet.";
//     //   }
//     // });
