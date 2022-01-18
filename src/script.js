function mouseTest() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("birthday").value = "";
  document.getElementById("city").value = "";
  document.getElementById("color").value = "";

  var i = Math.random();
  var resultDiv = document.getElementById('result');

  resultDiv.innerHTML = "";

  if (i <= 0.3) {
    resultDiv.innerHTML = "<br><img src=https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hauskatze_langhaar.jpg/640px-Hauskatze_langhaar.jpg alt=Katze width=250/> <p>Du bist eine Katze!</p>";
  } else if (i <= 0.6) {
    resultDiv.innerHTML = "<br><img src=https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Akita_inu.jpeg/640px-Akita_inu.jpeg alt=Hund width=250/> <p>Du bist ein Hund!</p>";
  } else {
    resultDiv.innerHTML = "<br><img src=https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Whale_shark_Georgia_aquarium.jpg/640px-Whale_shark_Georgia_aquarium.jpg alt=Katze width=250/> <p>Du bist ein Fisch!</p>";
  }
}
