export default{
    title:"El terremoto musical",
    showContent(){
        document.querySelector("#content").insertAdjacentHTML("beforeend",`<h3 class="pb-4 mb-4 fst-italic border-bottom">${this.title}</h3`);
    }
}