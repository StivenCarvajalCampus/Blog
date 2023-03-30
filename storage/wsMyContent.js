export let wsMyContent = {
    showContent(content){
        let plantilla = "";
        content.forEach((val,id) => {
            plantilla+=
        
        `<h2 class="blog-post-title">${val.title}</h2>
        <p class="blog-post-meta"text-white>${val.date} <a href="#">Mark</a></p>
        <p>${val.article}</p>
        <hr>
        <p>${val.article2}</p>
        <h2>${val.h2block}</h2>
        <blockquote class="blockquote">
          <p>${val.pblock}</p>
          <img class="responsiveImg" src= "${val.image}">
        </blockquote>
        <p>${val.article3}</p>
        <h3>${val.h3title}</h3>
        <p>${val.article4}</p>
        <img src= "${val.image1}">
        <h2>${val.titlelist}</h2>
        <ul>
        <li>${val.li1}</li>
        <li>${val.li2}</li>
        <li>${val.li3}</li>
      </ul>
      <video src=${val.video} width=520  height=240 controls poster="vistaprevia.jpg">
      <source src=${val.video} type="video/mp4">
      </video>
      <article class="blog-post">
      <h2 class="blog-post-title">${val.titlearticle}</h2>
      <p class="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>

      <p>${val.paragraph}</p>
      <p>${val.paragraph2}</p>
      <h3>${val.titletable}</h3>
      <p>${val.descriptiontable}</p>
     
`
});
return plantilla;
    }
};
self.addEventListener("message", (e)=>{
    postMessage(wsMyContent[`${e.data.module}`](e.data.data));
});