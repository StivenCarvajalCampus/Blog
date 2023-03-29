import config from "../../storage/config.js";
export default{
    showBanner(){
        config.dataMyBanner();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")));
        const ws = new Worker("storage/wsMyBanner.js", {type:"module"});
        let count = 0;
        ws.postMessage({module:"showMyBanner", data: this.banner_text});

        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#banner").append(...doc.body.children);
            ws.terminate();
        })
    }
}