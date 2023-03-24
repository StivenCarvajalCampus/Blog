export default{
    post:[
        {
            article: "EL GRAN MARTIN ELIAS",
            title: "Su Apodo",
            date: "Nov 12",
            paragraph: `Me puso así por la familia de él -contaba-. Tenía un tío que se llamaba Martín Elías (Maestre). Era el acordeonero con el que cantaba las parrandas en las fincas.`,
            image: "./assets/image/martincard.jpg",
            btn:{
                name: "Continue reading...",
                href: "#",
            }

        },

        {
            article: "EL GRAN ELIAS",
            title: "Su Apodo",
            date: "Nov 12",
            paragraph: `Me puso así por la familia de él -contaba-. Tenía un tío que se llamaba Martín Elías (Maestre). Era el acordeonero con el que cantaba las parrandas en las fincas.`,
            image: "./assets/image/martincard.jpg",
            btn:{
                name: "Continue reading...",
                href: "#",
            }

        },

        {
            article: "EL GRAN MARTIN ELIAS",
            title: "Su Apodo",
            date: "Nov 12",
            paragraph: `Me puso así por la familia de él -contaba-. Tenía un tío que se llamaba Martín Elías (Maestre). Era el acordeonero con el que cantaba las parrandas en las fincas.`,
            image: "./assets/image/martincard.jpg",
            btn:{
                name: "Continue reading...",
                href: "#",
            }

        }
    ],
    showPost(){
        this.post.forEach((val,id) => {
            document.querySelector("#post").insertAdjacentHTML("beforeend", ` <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                <h3 class="mb-0">${val.title}</h3>
                <div class="mb-1 text-muted">${val.date}</div>
                <p class="card-text mb-auto">${val.paragraph}</p>
                <a href="#" class="stretched-link">${val.btn.name}</a>
              </div>
              <div class="col-auto d-none d-lg-block">
              <img class="responsiveImg" src= "${val.image}">
                  <title>Placeholder</title>
                </svg>
              </div>
            </div>`)

        })
    }
}