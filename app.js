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

    saveData();

    showUebersicht();

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
    clearForm();
}

function hideUebersicht() {
    document.getElementById("uebersicht").classList.add("hidden");
    document.getElementById("options").classList.add("hidden");
}

function showUebersicht() {
    polaroidSchablone();
    document.getElementById("uebersicht").classList.remove("hidden");
    document.getElementById("options").classList.remove("hidden");
    hideDetails();
    hideEintrag();
}

//Methode zum Speichern des Daten-Arrays im localStorage
function saveData() {
    localStorage.setItem("freundebuch", JSON.stringify(_daten));
    console.log("Saved")
}

//Methode zum abrufen des Daten-Arrays aus dem localStorage
function getData() {
    var retrievedObject = localStorage.getItem("freundebuch");
    _daten = (JSON.parse(retrievedObject) == null) ? [] : JSON.parse(retrievedObject);

    // Da geläschte Datensätze momentan als null angezeigt werden müssen diese
    // erneut aus dem Array gelöscht werden, sonst gibt es eine Fehlermeldung
    // beim auslesen der Werte
    for (i in _daten) {
        if (_daten[i] == null) {
            delete _daten[i];
        }
    }
    console.log("Retrieved data: ", JSON.parse(retrievedObject));
}

//Funktion zum Löschen der Daten von vorherigem Eintrag in der Eintragsseite
function clearForm(){
    document.getElementById("firstname").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("uploadImage").src = "Bilder/boy.png";
    _uploadedimage = null;
}

//Funktion zur Aktualisierung der Details auf einen bestimmten Freunde
function freundAnzeigen(id) {

    document.getElementById("detailVorname").innerHTML = _daten[id].firstName;
    document.getElementById("detailNachname").innerHTML = _daten[id].lastName;
    document.getElementById("detailAlter").innerHTML = _daten[id].age;
    document.getElementById("detailEmail").innerHTML = _daten[id].email;
    document.getElementById("detailAdresse").innerHTML = _daten[id].address;
    document.getElementById("detailTel").innerHTML = _daten[id].phone;
    document.getElementById("detailBild").src = _daten[id].img;
    document.getElementById("delButton").setAttribute("onclick", "freundEntfernen(" + id + ")");

    showDetails();
}

//Funktion zum löschen eines Freundes
function freundEntfernen(id) {
    // var _check = prompt("Bist du sicher, dass du diesen Freund entfernen möchtest?", "Ja / Nein / Vielleicht");
    // if (_check.toLowerCase() === "ja") {
    //     delete _daten[id];
    //     saveData();
    //     showUebersicht();
    // } else if (_check.toLowerCase() === "vielleicht") {
    //     alert("Dann überleg es dir nochmal :)");
    //     saveData();
    //     showUebersicht();
    // } else {
    //
    // }

    //Bestätigung, ob der Nutzer den Freund wirklich löschen möchte
    if (confirm("Bist du sicher, dass du " + _daten[id].firstName + " " + _daten[id].lastName + " aus deinen Kontakten löschen möchtest?") == true) {
        delete _daten[id];
        saveData();
        showUebersicht();
    }
}

//Funktion die alle Freunde aus dem _daten-Array lädt und in die Übersicht einfügt
function polaroidSchablone() {

    getData();

    while (document.getElementById("uebersichtRow").firstChild.id !== "pluscard") {
        document.getElementById("uebersichtRow").removeChild(document.getElementById("uebersichtRow").firstChild);
    }

    let template = document.getElementById("cardTemplate").innerHTML; //lädt das Innere von template in die variable

    for (i in _daten) {

        if (_daten[i].firstName.concat(" ", _daten[i].lastName).toLowerCase().search(document.getElementById("searchBar").value.toLowerCase()) != -1) {
            let dummy = document.createElement("div");
            dummy.classList.add("col-lg-3");
            dummy.classList.add("cardLink");

            dummy.innerHTML = template;

            dummy.innerHTML = dummy.innerHTML.replace("$VORNAME$", _daten[i].firstName); //replacemethode würde nur string zurückliefern
            dummy.innerHTML = dummy.innerHTML.replace("$NACHNAME$", _daten[i].lastName);
            dummy.innerHTML = dummy.innerHTML.replace("$ID$", i);
            dummy.innerHTML = dummy.innerHTML.replace("Bilder/boy.png", _daten[i].img);

            //Vor dem Plus einfügen
            document.getElementById("uebersichtRow").insertBefore(dummy, document.getElementById("pluscard"));
        }
    }
}
