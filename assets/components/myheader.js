export default{
    title: {
        name: "Martin Elias Diaz Acosta"
    },
    topsongs: [
        {
            name:"Al fin llegaste tu",
            href:"#",
        },
        {
            name:"10 razones para amarte",
            href:"#",
        },
        {
            name:"El terremoto",
            href:"#",
        },
        {
            name:"Abrete",
            href:"#",
        },
        {
            name:"Ella tu amiga",
            href:"#",
        },
        {
            name:"Ya tengo quien me quiera",
            href:"#",
        },
        {
            name:"Vas a llorar ",
            href:"#",
        },
        {
            name:"Por ti ",
            href:"#",
        },
        {
            name:"El complemento de mi vida",
            href:"#",
        },
        {
            name:"El fantasma",
            href:"#",
        },
    ],
    listtitle(){
        document.querySelector("#title").insertAdjacentHTML("beforeend",`<a class="blog-header-logo text-yellow"href="${this.title}">${this.title.name}</a>`)
//<a class="blog-header-logo text-dark" href="#">Large</a>
    },

    listSongs(){
        let plantilla = "";
        this.topsongs.forEach((val,id) => {
            plantilla += `<a class="p-2 link-secondary" href="#">${val.name}</a>`
            });
            document.querySelector("#topsongs").insertAdjacentHTML("beforeend", plantilla);

        },
        fragShow(){/* 
            let doc = new DOMParser().parseFromString("<h1>Hola Mundo</h1>", "text/xml");
            console.log(doc.querySelector("h1")); */
            const ws = new Worker ("storage/ws.js", {type: "module"})
            ws.postMessage({nombre: "Stiven"});

            ws.addEventListener("message", (e)=>{
                console.log(e.data);
                ws.terminate();
            })
        }
    }
