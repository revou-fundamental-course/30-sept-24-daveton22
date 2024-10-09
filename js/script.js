// reverse (ganti konversi suhu)
document.getElementById("reverse").addEventListener("click", function (event) {
  let labelInput = document.getElementById("label-input-suhu");
  let labelhasil = document.getElementById("label-hasil-suhu");
  let convertButton = document.getElementById("convert");

  convertButton.removeEventListener("click", celcius);
  convertButton.removeEventListener("click", fahrenheit);

  if (labelInput.innerText === "Celcius") {
    labelInput.innerText = "Fahrenheit";
    labelhasil.innerText = "Celcius";
    convertButton.addEventListener("click", fahrenheit);
  } else {
    labelInput.innerText = "Celcius";
    labelhasil.innerText = "Fahrenheit";
    convertButton.addEventListener("click", celcius);
  }

  event.preventDefault();
});

// celcius function
function celcius(event) {
  let suhu = parseFloat(document.getElementById("input-suhu").value);

  if (isNaN(suhu)) {
    document.getElementById("hasil-suhu").value = "";
    document.getElementById("how-to-suhu").innerText = "";
    alert("masukan suhu yang akan dikonversikan");
  } else {
    let fahrenheit = (suhu * 9) / 5 + 32;
    document.getElementById("hasil-suhu").value = fahrenheit;
    document.getElementById(
      "how-to-suhu"
    ).value = `${suhu}°C * (9/5) + 32 = ${fahrenheit}°F`;
  }

  event.preventDefault();
}

// untuk konversi default
let convertButton = document.getElementById("convert");
convertButton.addEventListener("click", celcius);

// fahrenheit function
function fahrenheit(event) {
  let suhu = parseFloat(document.getElementById("input-suhu").value);
  if (isNaN(suhu)) {
    document.getElementById("hasil-suhu").value = "";
    document.getElementById("how-to-suhu").innerText = "";
    alert("masukan suhu yang akan dikonversikan");
  } else {
    let celcius = Math.floor(((suhu - 32) * 5) / 9);
    document.getElementById("hasil-suhu").value = celcius;
    document.getElementById(
      "how-to-suhu"
    ).value = `(${suhu}°F - 32) * 5/9 = ${celcius}°C`;
  }

  event.preventDefault();
}

// reset button

document.getElementById("reset").addEventListener("click", function (event) {
  document.getElementById("input-suhu").value = "";
  document.getElementById("hasil-suhu").value = "";
  document.getElementById("how-to-suhu").value = "";
  event.preventDefault();
});

// read more

let contentCarahitung = document.querySelector(".cara-hitung");
let readMoreButton = document.querySelector(".open-close");

readMoreButton.addEventListener("click", function () {
  if (contentCarahitung.classList.contains("hidden")) {
    contentCarahitung.classList.remove("hidden");
    readMoreButton.innerText = "tutup";
  } else {
    contentCarahitung.classList.add("hidden");
    readMoreButton.innerText = "lihat cara hitung";
  }
});
