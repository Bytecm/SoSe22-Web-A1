function mouseTest() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("birthday").value = "";
  document.getElementById("city").value = "";
  document.getElementById("color").value = "";

  var i = Math.random();
  var resultDiv = document.getElementById("resultbox");

  resultDiv.innerHTML = "";

  if (i <= 0.03) {
    resultDiv.innerHTML = "<br><img src=https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hauskatze_langhaar.jpg/640px-Hauskatze_langhaar.jpg alt=Katze width=250/> <p>Du bist eine Katze!</p>";
  } else if (i <= 0.06) {
    resultDiv.innerHTML = "<br><img src=https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Akita_inu.jpeg/640px-Akita_inu.jpeg alt=Hund width=250/> <p>Du bist ein Hund!</p>";
  } else if (i <= 0.1) {
    resultDiv.innerHTML = "<br><img src=https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Whale_shark_Georgia_aquarium.jpg/640px-Whale_shark_Georgia_aquarium.jpg alt=Katze width=250/> <p>Du bist ein Fisch!</p>";
  } else if (i <= 0.3) {
    resultDiv.innerHTML = "<br><img src=http://esciencenews.com/files/images/201406269525560.jpg alt=Elefantenspitzmaus width=250/> <p>Du bist eine Elefantenspitzmaus!</p>";
  } else if (i <= 0.5) {
    resultDiv.innerHTML = "<br><img src=https://upload.wikimedia.org/wikipedia/commons/c/ca/Arvicola_terrestris.jpg alt=Ostschermaus width=250/> <p>Du bist eine Ostschermaus!</p>";
  } else if (i <= 0.7) {
    resultDiv.innerHTML = "<br><img src=https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Neomys_anomalus.jpg/600px-Neomys_anomalus.jpg alt=Sumpfspitzmaus width=250/> <p>Du bist eine Sumpfspitzmaus!</p>";
  } else {
    resultDiv.innerHTML = "<br><img src=https://upload.wikimedia.org/wikipedia/commons/a/ab/Razer_Naga_2014_MMO_Gaming_Mouse_%2814714867599%29.jpg alt=Katze width=250/> <p>Du bist eine Computermaus!</p>";
  }
}
