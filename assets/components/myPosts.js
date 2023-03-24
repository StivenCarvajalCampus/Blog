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
            article: "EL GRAN MARTIN ELIAS",
            title: "Su Amigo",
            date: "Nov 12",
            paragraph: `En 2006, tras realizar una producción musical en estudio con los arreglos del acordeonero Rolando Ochoa, Martín Elías y Rolando acordaron conformar una nueva agrupación.
            
            `,
            image: "./assets/image/card2.jpg",
            btn:{
                name: "Continue reading...",
                href: "#",
            }

        },

        {
            article: "EL GRAN MARTIN ELIAS",
            title: "Juancho de la espriella",
            date: "Nov 12",
            paragraph: `Al retiro de Rolando, decidió contactar a Juan Mario 'Juancho' De la Espriella para conformar una nueva agrupación. De la Espriella ya había grabado con su padre Diomedes Díaz, por lo que tuvo una gran aceptación entre sus seguidores.`,
            image: "./assets/image/card3.jpg",
            btn:{
                name: "Continue reading...",
                href: "#",
            }

        },
        {
            article: "EL GRAN MARTIN ELIAS",
            title: "Caya Varon",
            date: "Nov 12",
            paragraph: `Cuando Martín Elías aún era un adolescente se casó con su novia Claudia ‘Caya’ Varón. De esa unión nació Martín Elías Jr., pero el matrimonio llegó a su fin ocho años después.`,
            image: "./assets/image/card4.jpg",
            btn:{
                name: "Continue reading...",
                href: "#",
            }

        },
        {
            article: "EL GRAN MARTIN ELIAS",
            title: "Dayana Jaimes",
            date: "Nov 12",
            paragraph: `En ceremonia civil realizada en la Casa Pestagua contrajeron matrimonio el cantante Martín Elías Díaz Acosta y Dayana Jaimes García, hijos de Diomedes Díaz (F), Patricia Isabel Acosta, Antonio Jaimes Torres y Nayibe García Cañizares.`,
            image: "./assets/image/card5.jpeg",
            btn:{
                name: "Continue reading...",
                href: "#",
            }

        },
        {
            article: "EL GRAN MARTIN ELIAS",
            title: "Martin Elias JR",
            date: "Nov 12",
            paragraph: `Martín Elías Jr. es producto del primer matrimonio que tuvo el fallecido artista junto a Claudia ‘Caya’ Varón, con quien contrajo nupcias por la iglesia católica en el año 2007.`,
            image: "./assets/image/card6.jpeg",
            btn:{
                name: "Continue reading...",
                href: "#",
            }

        },
        
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