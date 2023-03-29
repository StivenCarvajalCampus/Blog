export let wsMyBanner = {
    showMyBanner(p1){
        console.log (p1)
        let plantilla=
        `<h1 class="display-4 fst-italic" style= "background: black">${p1.title}</h1>
        <p class="lead my-3" style = "background: black">${p1.paragraph}</p>
        <p class="lead mb-0"><a href="${p1.btn.href}" target= "_blank" class="text-white fw-bold">${p1.btn.name}</a></p>`
        return plantilla;
    }
};
self.addEventListener("message",(e) =>{
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));

});