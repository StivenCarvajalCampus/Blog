export default{
    content:[
        {
            title: " Su familia ",
            date:"23/03/23 ",
            article: `Por parte de madre, tuvo tres hermanos: Diomedes de Jesús, Luis Ángel y Rafaél Santos; aunque son muchos más, pues su padre superó los 25 hijos reconocidos, entre los nacidos de sus esposas y de relaciones extramatrimoniales.
            Su primera esposa fue Claudia Varón (Caya), con quien tuvo un hijo: Martín Elías Jr.; luego, se casó con Dayana Jaimes, madre de su hija Paula Elena.`,
            article2: `Cuando Martín Elías Díaz tenía apenas 8 años, su hermano mayor, Rafael Santos, fue fichado por Sony Music. Sin embargo, pese al reconocimiento logrado por Rafael Santos, a la larga fue Martín Elías quien hizo real la posibilidad de esa continuidad.
            Se dice que soñó con ser futbolista. Pero su tío Élber Díaz lo invitó, ya a los 11, a participar en el grupo musical La Familia de Diomedes, en el que buscaban reafirmar que la grandeza musical de ‘el Cacique de La Junta’ provenía de una poderosa rama.`,
            h2block: `Primera Composicion`,
            pblock: `“Mi primera composición se la hice a una niñita del colegio –recordaría Martín Elías–. Le hice un cantico cuando me la encontré en un avión de Valledupar a Bogotá y se sentó al lado mío. Llegué a la casa y escribí un pedacito de canción. Así descubrí que podía componer”.`,
            article3: `Su carrera fue vertiginosa. A los 17 años estaba grabando su primer álbum. Aunque comenzó con el acordeonero Fernando Rangel, escogió como compañero de equipo a otro heredero de la tradición: Rolando Ochoa, hijo de Calixto Ochoa. Juntos lanzaron ‘La nueva historia’, en el 2007.
             Siguieron los álbumes ‘Marcando la diferencia’ (2008) y ‘Cosa de locos’ (2009).
            “Eran discos que me iban abriendo camino”, dijo en entrevista con EL TIEMPO, en el 2013. “La gente empezaba a tener una idea de lo que venía haciendo. ‘La soyadera’ le había dado la vuelta a la costa. Después, la canción ‘Quién te crees tú’ empezó a sazonar la cosa. Pero ‘El terremoto’ (2011) fue la que me abrió las puertas”.`,
            image:"assets/image/acordeon.gif",
            image1:"assets/image/Martin.gif",
            video:"assets/video/martin.mp4",
            h3title: `Sus Inicios`,
            article4: `En el 2009, Martín Elías era un joven pasadito de kilos, con una voz que algunos catalogaban de parecida, sino “igualita”, a la de Diomedes. Como artista emergente concursó en la primera edición del Festival Francisco el Hombre, de Riohacha. Sabía que lo veían como
             “otro hijo de Diomedes que quiere salir a cantar”, pero en escenario generaba una adrenalina entre seguidores y quienes no lo eran que casi pareció injusto que no ganara.`,
             titlelist:`Mas sonadas `,
             li1:`10 razones para amarte`,
             li2: `El terremoto`,
             li3: `El boom del momento`,
             titlearticle:`Vida musical`,
             paragraph:`“Me empezaron a contratar para conciertos con artistas grandes –decía–. Compartía tarima con Silvestre, Peter Manjarrés e Iván Villazón. Ellos ya tenían su trayectoria, llevaban mucho público y yo sabía que si me veían ahí, les irían gustando mis presentaciones. ‘El terremoto’ los convenció de que tenía mucho para dar en la música”.
             El Gran Martín Elías, como definitivamente decidió llamarse, hablaba de la búsqueda de un equilibro entre lo que se esperaba de él como el heredero más visible y exitoso de Diomedes y su conexión espontánea con los jóvenes, ávidos de sonidos rápidos, inscritos dentro de la llamada nueva ola vallenata.
             `, 
             paragraph2:`“Me quiero quedar con la nobleza de mi papá, que se refleja en la familia. Todos salimos calmaditos –dijo cuando hacía promoción de ‘El boom del momento’ (2012), su primer álbum con Juancho de la Espriella–. Mi papá es un ídolo, imposible superarlo. Pero me quiero quedar con la dulzura que tiene para interpretar sus canciones”.`,
             titletable:`Sus Canciones y Compositores`,
             descriptiontable:`A lo largo de su carrera tabajo al lado de un gran compositor y amigo como lo fue Rolando Ochoa a continuacion mostraremos algunas de sus composiciones mas conocidas:`,



    }
],
showContent(){
    this.content.forEach((val,id)=> {
        document.querySelector("#articulo").insertAdjacentHTML("beforeend", `
        <h2 class="blog-post-title">${val.title}</h2>
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
       
` )
    })
},
    title:"El terremoto musical",
    showHead(){
        document.querySelector("#head").insertAdjacentHTML("beforeend",`<h3 class="pb-4 mb-4 fst-italic border-bottom">${this.title}</h3`);
    }
}