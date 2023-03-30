import config from "../../storage/config.js";
export default{
  showTable(){
    config.dataMyTable();
    Object.assign(this, JSON.parse(localStorage.getItem("myTable")));
    const ws = new Worker("storage/wsMyTable.js",{type: "module"});
    ws.postMessage({module:"showTable", data: this.table});
    ws.addEventListener("message",(e)=>{
      let doc = new DOMParser().parseFromString(e.data, "text/html");
      document.querySelector("#articulo").append(...doc.body.children);
      ws.terminate();
    })
  }
}