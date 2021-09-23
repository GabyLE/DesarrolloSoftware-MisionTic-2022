const frases = [
"No hay que ir para atrás ni para darse impulso",
"No hay caminos para la paz; la paz es el camino",
"Haz el amor y no la guerra",
"Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse",
"Lo peor que hacen los malos es obligarnos a dudar de los buenos"
];

const nombres = [
    "Lao Tsé",
    "Mahatma Gandhi",
    "John Lennon",
    "Charles Baudelaire",
    "Jacinto Benavente"
];

for (let i = 0; i < 5; i++) {

    let template = `<div class="col-12 col-sm-12 col-md-6 col-lg-4">
    <p>
        <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample${i}" role="button" aria-expanded="false" aria-controls="collapseExample">
          ${nombres[i]}
        </a>
      </p>
      <div class="collapse" id="collapseExample${i}">
        <div class="card card-body">
          ${frases[i]}
        </div>
      </div>
                </div>`;
    let grid = document.getElementById('row');
    grid.innerHTML += template;
    
}