export default{
    title: "El Gran Martin Elias",
    paragraph:"El Gran Martín Elías, así quería Diomedes Díaz que figurara el nombre del menor de los hijos que tuvo con su esposa, Patricia Acosta, en el registro de nacimiento. Era junio de 1990, el ídolo del vallenato recibió en pleno concierto la noticia de que su esposa estaba dando a luz. “Díganle a Patricia que se va a llamar El Gran Martín Elías”, dijo Diomedes.",
    image:"assets/image/banner1.1.jpg",
    btn: {
        name: "Continue reading..."
    },
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`;
    },
    showSectionbanner(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend",`
        <h1  class="display-4 fst-italic" style= "background: black">${this.title}</h1>
        <p  class="lead my-3" style = "background: black">${this.paragraph}</p>
        <p  class="lead mb-0"><a href="${this.btn.href}" target= "_blank" class="text-white fw-bold">${this.btn.name}</a></p>`)
    }
}