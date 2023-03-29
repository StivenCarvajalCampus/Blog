import config from "../../storage/config.js";
export default{
    showHeader(){
        //Le decimos que el this va a contener lo que haya en el localStorage en la key "myHeader"
        config.dataMyHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
        //Creamos el worker
        const ws = new Worker("storage/wsMyHeader.js", {type:"module"});
        //enviamos el mensaje al worker
        let id = [];
        let count = 0;
        //id.push("#title")
        ws.postMessage({module: "listTitle", data: this.title});
        // id.push ("#listsongs")
        ws.postMessage({module: "listSongs", data: this.topsongs});
        id=["#title", "#topsongs"];

        //Esta es la respuesta al worker
        ws.addEventListener("message",(e)=>{
            //Estamos parseando lo que trae el mensaje
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            //Insercion en el index
            document.querySelector(id[count]).append(...doc.body.children);
            //terminamos el worker
            (id.length-1==count)? ws.terminate(): count++;
        })
    }
}