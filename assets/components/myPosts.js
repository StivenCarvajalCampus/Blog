import config from "../../storage/config.js";
export default{
    showPost(){
        config.dataMyPosts();
        Object.assign(this, JSON.parse(localStorage.getItem("myPost")));
        const ws = new Worker("storage/wsMyPosts.js", {type: "module"});
        console.log(this.post)
        ws.postMessage({module:"showPost", data: this.post});
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector("#post").append(...doc.body.children);
            ws.terminate();
        })
    }
}