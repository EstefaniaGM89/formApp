const firstName = document.getElementById("firstName");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthDate");
const cycle = document.getElementById("cycle");
const modalityRadios = document.getElementsByName("modality");
const profilePic = document.getElementById("profilePic");
const bio = document.getElementById("bio");
const submitBtn = document.getElementById("submitBtn");

function mostrarAlerta(missatge, referencia) {
  netejarAlerta(referencia);
  const error = document.createElement("P");
  error.textContent = missatge;
  referencia.parentNode.insertBefore(error, referencia.nextSibling);
}

function netejarAlerta(referencia) {
  const alerta = referencia.parentElement.querySelector("p");
  if (alerta) {
    alerta.remove();
  }
}

// Exercici 1
firstName.addEventListener("input", () => {
  const nom = firstName.value.trim();
  console.log(`Nom introduït: ${nom}`);

  if (nom === "") {
    mostrarAlerta("El camp és 'Nom' és obligatori.", firstName);
    email.disabled = true;
  } else {
    netejarAlerta(firstName);
    email.disabled = false;
    console.log("El camp 'email' està activat.");
  }
});

// Exercici 2
email.addEventListener("input", () => {
  const correu = email.value.trim();
  const correuValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correu);
  console.log(`El correu és ${correuValid}`);

  if (correu === "") {
    mostrarAlerta("El camp és obligatori.", email);
    birthDate.disabled = true;
  } else if (!correuValid) {
    mostrarAlerta("El format del correu electrònic no és vàlid.", email);
    birthDate.disabled = true;
  } else {
    netejarAlerta(email);
    birthDate.disabled = false;
    console.log("El camp birthDate està activat.");
  }
});

// Exercici 3
birthDate.addEventListener("input", () => {
  const data = birthDate.value.trim();
  console.log(`Data de naixement introduïda: ${data}`);

  if (!data) {
    mostrarAlerta("El camp és obligatori.", birthDate);
    cycle.disabled = true;
    return;
  }

  const dataNaixement = new Date(data);
  const diaActual = new Date();

  if (dataNaixement > diaActual) {
    mostrarAlerta("La data de naixement no pot ser posterior a la data d'avui.", birthDate);
    cycle.disabled = true;
    return;
  }

  let edat = diaActual.getFullYear() - dataNaixement.getFullYear();
  const mes = diaActual.getMonth() - dataNaixement.getMonth();

  if (mes < 0 || (mes === 0 && diaActual.getDate() < dataNaixement.getDate())) {
    edat--;
  }

  if (edat < 18) {
    mostrarAlerta("Has de ser major d'edat!", birthDate);
    cycle.disabled = true;
  } else {
    netejarAlerta(birthDate);
    cycle.disabled = false;
    console.log("El camp 'cycle' està activat.");
  }
});

// Exercici 4
cycle.addEventListener("change", () => {
  const ciclesValids = ["DAW", "DAM", "ASIX"]; // Afegir cicles vàlids aquí
  console.log("Cicle seleccionat:", cycle.value);

  if (!ciclesValids.includes(cycle.value)) {
    mostrarAlerta("Has de seleccionar un cicle formatiu vàlid!", cycle);
    modalityRadios.forEach(radio => radio.disabled = true);
  } else {
    netejarAlerta(cycle);
    modalityRadios.forEach(radio => radio.disabled = false);
    console.log("Els camps de 'modalityRadios' estan activats.");
  }
});

// Exercici 5
modalityRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    let modalitatSeleccionada = false;

    modalityRadios.forEach(radio => {
      if (radio.checked && (radio.value === "Presencial" || radio.value === "Online")) {
        modalitatSeleccionada = true;
      }
    });

    if (!modalitatSeleccionada) {
      mostrarAlerta("Has de seleccionar una modalitat.", modalityRadios[0]);
      profilePic.disabled = true;
    } else {
      netejarAlerta(modalityRadios[0]);
      profilePic.disabled = false;
      console.log("El camp 'profilePic' està activat.");
    }
  });
});

// Exercici 6
profilePic.addEventListener("input", () => {
  const url = profilePic.value.trim();
  const urlValida = /^(https?:\/\/)?([a-z0-9\-]+\.)+[a-z0-9]{2,6}([\/\w \.-]*)*\/?$/.test(url);

  if (url === "") {
    mostrarAlerta("La URL de la foto de perfil és obligatòria.", profilePic);
    bio.disabled = true;
  } else if (!urlValida) {
    mostrarAlerta("Aquesta URL no és vàlida.", profilePic);
    bio.disabled = true;
  } else {
    netejarAlerta(profilePic);
    bio.disabled = false;
    console.log("El camp 'bio' està activat.");
  }
});

//Exercici 7
bio.addEventListener("input", () => {
  const presentacio = bio.value.trim();
  const paraules = presentacio.split(/\s+/).filter(word => word.length > 0);
  const numParaules = paraules.length;

  if (numParaules < 30) {
    mostrarAlerta("La presentació ha de tenir almenys 30 paraules.", bio);
    submitBtn.disabled = true;
  } else {
    netejarAlerta(bio);
    submitBtn.disabled = false;
  }
});

// Exercici 8 i 9
document.getElementById("userForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  console.log("Dades del Formulari:", data);
});
