import config from "../../storage/config.js";
export default{
    showContent(){
        config.dataMyContent();
        Object.assign(this, JSON.parse(localStorage.getItem("myContent")));
        const ws = new Worker("storage/wsMyContent.js", {type: "module"});
        ws.postMessage({module: "showContent", data: this.content});
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#articulo").append(...doc.body.children);
            ws.terminate();
        })
    }
}