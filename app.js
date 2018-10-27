

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
    console.log(freund);

    // DackelStyle
  // let dackelStyle = () => {
      let newDiv = document.createElement("div");
      newDiv.className = "col-lg-3";
      newDiv.id = "cards";

        let newAnk = document.createElement("a");
        newAnk.href = "bestimmterFreund";

        let newDiv2 = document.createElement("div");
        newDiv2.class = "rahmen";

          let newLabel = document.createElement("label");
          newLabel.id = "name";

          let newBild = document.createElement("img");
          newBild.className = "polaroid";
          newBild.src = "Bilder/boy.png";

          //nun alles Verschachteln und anfügen
          newLabel.appendChild(newBild);
          newDiv2.appendChild(newLabel);
          newAnk.appendChild(newDiv2);
          newDiv.appendChild(newAnk);

          console.log(newDiv);



      // hier kommt noch die Referenz auf den eingegebenen Namen in die Methode.
      let newDivText = document.createTextNode(freund[0]+" "+freund[1]);
      console.log(newDivText);
      console.log(newDiv);
      newDiv.appendChild(newDivText);
      document.getElementById()

      let pola = document.querySelector("#neuerFreund");
      console.log(pola);
      let pBild = document.querySelector(".polar");
      console.log(pBild);
      let .polar.insertBefore(newDiv,pBild);

  // }







    // // Hier wird das Polaroid erstellt
    // let erstellePolaroid = () => {
    //
    //   let temp, item, a, i;
    //   temp = document.getElementsByTagName("template")[3];
    //   item = temp.content.querySelector("label");
    //
    //   for(i = 0; i< 2; i++){
    //     a = document.importNode(item,true);
    //     a.textContent += freund[i];
    //     document.body.appendChild(a);
    //   }
    //
    // }








    // submit-button
  //  submit.addEventListener("click", addFreund);
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
