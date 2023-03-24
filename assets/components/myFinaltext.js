export default{
    finaltext: [
        {
            title: "Su muerte",
            date:"April 14, 2017",
            paragraph1:`Según quedó registrado en los informes de las autoridades, el hecho se originó a las 7:40 a.m., cuando el vehículo en el que se transportaba con otras tres personas se volcó. Sin embargo, solo hasta las 10 a.m. se conocían públicamente las primeras imágenes en el país.
            “¿Cómo fue?” y “¿Qué pasó?” fueron las preguntas que se hicieron los seguidores del artista y amantes de la música vallenata, en especial aquellos que lo presenciaron cantar hacía unos instantes en su última parranda, en Coveñas (Sucre).
            `,
            titlelist: "Acompañantes en el accidente",
            item1:`Martin Elias Diaz Acosta`,
            item2:`Armando Quintero (Conductor)`,
            item3: 'Ramirez (Asistente)',
            item4: `Rafael Rico (Asistente)`,
            paragraph2:`En medio de esa alegría que le significaba volver a ver a sus hijos, su esposa y demás seres queridos en días santos, Martín Elías, sin cinturón de seguridad, se cambiaba de camisa en el asiento del copiloto, cuando pasó lo peor.

            El vehículo, que superaba los 150 km/h de velocidad en una vía con una velocidad máxima de 50 km/h, sufrió un volcamiento y expulsó a Martín Elías abruptamente contra el asfalto. Otras tres personas, incluido el conductor, sufrieron heridas.
            
            El artista vallenato fue trasladado al hospital de San Onofre con lesión cardíaca, trauma cerrado de abdomen, contusiones pulmonares bilaterales, edema pulmonar, contusión cardíaca, edema agudo pulmonar y edema agudo cerebral.
            
            También se conoció que tuvo trauma de testículos, laceración pericardia, laceración de pelvis renal izquierda, fracturas de arcos costales, lesiones por mecanismo de fricción y excoriaciones múltiples en la cara, espalda y miembro superior e inferior.
            
            Pero, ante la gravedad de su situación, fue llevado a la Clínica Santa María de Sincelejo, donde finalmente falleció a las 12:45 p.m., dejando dolor y luto en el mundo vallenato.`,
            image1: "./assets/image/accidente1.jpeg",
            image2: "./assets/image/accidente2.jpeg",
            image3: "./assets/image/accidente3.jpeg",
            image4: "./assets/image/camioneta.jpg",
            image5: "./assets/image/hospital.jpg",
            image6: "./assets/image/martin.jpeg",




    }
],
showFinaltext(){
    this.finaltext.forEach((val,id) => {
        document.querySelector("#finaltext").insertAdjacentHTML("beforeend",`
        <article class="blog-post">
        <h2 class="blog-post-title">${val.title}</h2>
        <p class="blog-post-meta">${val.date}<a href="#">Chris</a></p>

        <p>${val.paragraph1}</p>
        <img class="responsiveImg" src= "${val.image1}">
        <img class="responsiveImg" src= "${val.image2}">
        <img class="responsiveImg" src= "${val.image3}">
        <h2>${val.titlelist}</h2>
        <ul>
          <li>${val.item1}</li>
          <li>${val.item2}</li>
          <li>${val.item3}</li>
          <li>${val.item4}</li>
        </ul>

        <img class="responsiveImg" src= "${val.image4}">
        <img class="responsiveImg" src= "${val.image5}">
        <img class="responsiveImg" src= "${val.image6}">
        <p>${val.paragraph2}</p>
      </article>

      <nav class="blog-pagination" aria-label="Pagination">
      <a class="btn btn-outline-primary" href="#">Older</a>
      <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
    </nav>
        
        `)

    }
    )
}
}