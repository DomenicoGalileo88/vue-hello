/* 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus (fatelo):
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

const app = new Vue({
  el: "#app",

  data: {
    message: "Ciao Vue JS",
    image: "https://picsum.photos/200/300"
  }
});