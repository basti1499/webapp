//
// /*
// Grundsystem der Anwendung



//Array für die Objekte der Personen
let _daten = [];

//Vaiable für das hinzuzufügende Bild
let _uploadedimage = null;



//Daten von der Eintragsseite in das Array speichern
function savePerson(){

	// wenn kein Bild hinzugefügt, dann nehme Standardbild
    if (_uploadedimage == null){
        _uploadedimage = "Bilder/boy.png";
    }

    let _vorname = document.getElementById("firstname").value;
    let _nachname = document.getElementById("surname").value;
    let _alter = document.getElementById("age").value;
    let _email = document.getElementById("email").value;
    let _adresse = document.getElementById("address").value;
    let _telefon = document.getElementById("phone").value;
    let _person = {
        firstName: _vorname,
        lastName: _nachname,
        age: _alter,
        email: _email,
        address: _adresse,
        phone: _telefon,
        img: _uploadedimage
    }

    //Überprüfungen und Alerts
    if ( _vorname == null || _vorname == "" || _nachname == null || _nachname == "" || _alter == null || _alter == "" ||
    _email == null || _email == "" || _adresse == null || _adresse == "" || _telefon == null || _telefon == "") {
        alert("Bitte alle Felder ausfüllen!");
        return;
    }

    //Überprüfen, dass in Alter eine Nummer steht
    if (isNaN(_alter)){
        alert("Bitte eine Zahl für Alter eingeben!");
        return;
    }

    //Überprüfen, dass in Telefonnummer
    if (isNaN(_telefon)){
        alert("Bitte eine Nummer für Telefonnummer eingeben!");
        return;
    }

    //Überprüfen der Mail


    _daten.push(_person);

    console.log(_person);
    console.log(_daten);
}


//Funktion zum Bild hochladen
function imageUpload(){
    document.getElementById("fileInput").click();
    let fileDisplayArea = document.getElementById('fileDisplayArea');
    fileInput.addEventListener('change', function(e) {
       var file = fileInput.files[0];
       var imageType = /image.*/;

       if (file.type.match(imageType)) {
           var reader = new FileReader();
           reader.onload = function(e) {
               document.getElementById("uploadImage").src = reader.result;
               //Bild in die Variable für Objekt und Array schreiben
               _uploadedimage = reader.result;
           }
           reader.readAsDataURL(file);
       } else {
          alert("Dateiformat wird nicht unterstützt!");
       }
   });
    console.log(_daten);
     }

//Funktionen zum anzeigen und verstecken von den verschiedenen Seiten
function hideDetails() {
    document.getElementById("detailanzeige").classList.add("hidden");
}

function showDetails() {
    document.getElementById("detailanzeige").classList.remove("hidden");
    hideEintrag();
    hideUebersicht();
}

function hideEintrag() {
    document.getElementById("eintragsseite").classList.add("hidden");
}

function showEintrag() {
    document.getElementById("eintragsseite").classList.remove("hidden");
    hideDetails();
    hideUebersicht();
}

function hideUebersicht() {
    document.getElementById("uebersicht").classList.add("hidden");
}

function showUebersicht() {
    document.getElementById("uebersicht").classList.remove("hidden");
    hideDetails();
    hideEintrag();
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
