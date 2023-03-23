export default{
    
        nav:[
            {
                title: "about",
                paragraph: `Su carrera fue vertiginosa. A los 17 años estaba grabando su primer álbum. Aunque comenzó con el acordeonero Fernando Rangel, escogió como compañero de equipo a otro heredero de la tradición: Rolando Ochoa, hijo de Calixto Ochoa. Juntos lanzaron ‘La nueva historia’, en el 2007. Siguieron los álbumes ‘Marcando la diferencia’ (2008) y ‘Cosa de locos’ (2009).`,
            },
            {
                title: "Album",
             link:[
                {
                    name:"Una nueva historia",
                    href:"#",        
                },
                {
                    name:"Marcando la diferencia",
                    href:"#",        
                },
                {
                    name:"Cosa de locos",
                    href:"#",        
                },
                {
                    name:"Homenaje a los grandes",
                    href:"#",        
                },
                {
                    name:"El Boom del momento",
                    href:"#",        
                },
                {
                    name:"La historia continua",
                    href:"#",        
                },
                {
                    name:"En vivo",
                    href:"#",        
                },
                {
                    name:"Entre Diaz y canciones",
                    href:"#",        
                },
                {
                    name:"Imparables",
                    href:"#",        
                },
                {
                    name:"Homenaje a los grandes Vol.2",
                    href:"#",        
                },
                 {
                    name:"Sin Limites",
                    href:"#",        
                },    
             ],
            },
            {
             title: "Top Songs",
             link:[
                {
                    name:"Diez razones para amarte",
                    href:"#",        
                },
                {
                    name:"Linda",
                    href:"#",        
                },
                {
                    name:"Muchachita loca",
                    href:"#",        
                },
                {
                    name:"Abrete",
                    href:"#",        
                },
                {
                    name:"Cancelada de mi vida",
                    href:"#",        
                },
                {
                    name:"Mi ex",
                    href:"#",        
                },
                {
                    name:"Al fin llegaste tu",
                    href:"#",        
                },
                {
                    name:"Loco por tu amor",
                    href:"#",        
                },
                {
                    name:"El terremoto",
                    href:"#",        
                },
                {
                    name:"El latigo",
                    href:"#",        
                },  
             ],

            },
        ],  
        showAside(){
           const data = this.nav.map((val,id) => {
            return(    
            (val.link)
                    ? this.list(val)
                    : this.cards(val)
            );
           });

            document.querySelector("#nav").insertAdjacentHTML("beforeend",data.join())

        },
        cards(val){
            return `<div class="p-4 mb-3 bg-light rounded ">
            <h4 class="fst-italic">${val.title}</h4>
            <p class="mb-0">${val.paragraph}</p>
          </div>`;

        },
        list(val){
            return `<div class="p-4">
            <h4 class="fst-italic">${val.title}</h4>
            <ol class="list-unstyled mb-0">
            ${val.link.map((val,id) => `<li><a href="${val.href}">${val.name}</a></li>`).join("")}
            </ol>
          </div>
            `;

        },
    }
