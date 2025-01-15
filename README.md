# formApp Ejercicio
Este repositorio contiene un formulario interactivo desarrollado con HTML, CSS y JavaScript que incluye validaciones avanzadas para mejorar la experiencia del usuario y garantizar la calidad de los datos introducidos.

Características principales:
Validaciones en tiempo real para campos obligatorios como Nombre, Email, Fecha de Nacimiento y otros.
Gestión dinámica de habilitación/deshabilitación de campos en función de los datos introducidos.
Uso de mensajes de error personalizados para proporcionar retroalimentación clara e intuitiva.
Soporte para formatos específicos, como correos electrónicos y URLs.
Lógica para validaciones específicas (p. ej., mayoría de edad, opciones válidas en select y radio buttons).
Compatible con navegadores modernos y diseño responsive.

Exercici 1: Nom
Objectiu: Validar que el camp Nom no estigui buit.
- El camp Nom és obligatori. Implementa la validació per assegurar-te que l'usuari introdueix un valor. Si
el nom no és vàlid (està buit), mostra un missatge d'error i no permetis que l'usuari passi al següent
camp.
- El següent camp (Correu Electrònic) no es podrà activar fins que el nom sigui vàlid.
  
Exercici 2: Correu
Objectiu: Validar que el Correu Electrònic sigui un correu vàlid.
- El camp Correu Electrònic ha de ser obligatori i ha de tenir un format correcte (per exemple,
usuari@domini.com).
- Implementa una validació per verificar el format del correu electrònic mitjançant una expressió regular
o qualsevol mètode de validació adequat.
- El següent camp (Data de Naixement) no es podrà activar fins que el correu electrònic sigui vàlid.
  
Exercici 3: Data de naixement
Objectiu: Validar que l'usuari sigui major d'edat.
- El camp Data de Naixement ha de validar que l'usuari té almenys 18 anys.
- El següent camp (Cicle Formatiu) no es podrà activar fins que la data de naixement sigui vàlida.
  
Exercici 4: Cicle formatiu
Objectiu: Validar que l'usuari hagi seleccionat un cicle formatiu vàlid.
- El camp Cicle Formatiu ha de permetre seleccionar entre DAW, DAM, ASIX i Un altre.
- Implementa una validació que asseguri que una opció vàlida ha estat seleccionada. Si l'usuari no
selecciona cap opció vàlida, mostra un missatge d'error.
- El següent camp (Modalitat d'Estudi) no es podrà activar fins que s'hagi seleccionat un cicle formatiu
vàlid.

Exercici 5: Modalitat d’estudi
Objectiu: Validar que l'usuari hagi seleccionat una modalitat d'estudi vàlida.
- El camp Modalitat d'Estudi ha de permetre seleccionar entre Presencial o Online.
- Comprova que l'usuari ha seleccionat una modalitat i, si no ho ha fet, mostra un missatge d'error.
- El següent camp (Foto de Perfil) no es podrà activar fins que s'hagi seleccionat una modalitat d'estudi.
  
Exercici 6: Foto de perfil
Objectiu: Validar que l'usuari introdueixi una URL vàlida per a la foto de perfil.
- El camp Foto de Perfil ha de ser una URL vàlida. Utilitza una expressió regular o una altra tècnica per
verificar que l'entrada compleix amb el format d'una URL vàlida (per exemple,
https://www.exemple.com/imatge.jpg).
- El següent camp (Presentació) no es podrà activar fins que l'URL de la foto sigui vàlida-
  
Exercici 7: Text de presentació
Objectiu: Validar que la Presentació tingui almenys 30 paraules.
- El camp Presentació ha de contenir un mínim de 30 paraules. Comprova el nombre de paraules
introduïdes per l’usuari.
- Si la presentació no té les paraules mínimes, mostra un missatge d'error i impedeix que el formulari sigui
enviat.
- El botó de Crear perfil no es podrà activar fins que la presentació sigui vàlida.

Exercici 8: Botó d’enviament
Objectiu: Activar el botó d'enviament només quan tots els camps siguin vàlids.
- El botó “Enviar dades” ha de començar desactivat.
- El botó només s'activarà quan tots els camps siguin vàlids: Nom, Correu electrònic, Data de naixement,
Cicle formatiu, Modalitat d'estudi, Foto de perfil i Presentació.

Exercici 9: Mostrar les dades
Objectiu: Mostrar les dades per consola en format objecte de Javascript.
- Quan tots els camps del formulari siguin vàlids i s'activi el botó Crear perfil, has d'utilitzar la classe
FormData per recollir automàticament tots els valors del formulari.
- A partir de l'objecte FormData, utilitza la funció Object.fromEntries per convertir-lo en un objecte
JavaScript que contingui els valors del formulari en format clau-valor.
- Mostra aquest objecte complet a la consola quan es faci clic al botó “Enviar dades”.
