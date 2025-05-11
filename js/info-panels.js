// Función para crear paneles de información
function createInfoPanels() {
  createMoriviviPanel();
  createBooPanel();
  createStarPanel();
  createC3tkPanel();
  createAlcalPanel();
  createCentrPanel();
  createindiaPanel();
  createJunglePanel();
  createPitirrePanel();
  createRelojPanel();
  createWilliePanel();
  createUagmPanel();
}

 // Función para crear paneles de información
    function createInfoPanels() {
      // Panel de información del Moriviví
      const moriPanel = document.getElementById('morivivi-info');
      moriPanel.innerHTML = `
        <h2 style="color: lightgreen; text-shadow: 2px 2px 0 green;">🌿 Moriviví</h2>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mimosa_pudica_Blanco2.253-cropped.jpg/800px-Mimosa_pudica_Blanco2.253-cropped.jpg"
               alt="Moriviví">
          <div>
            <p style="margin: 5px 0; font-weight: bold;">Nombre científico: <em>Mimosa pudica</em></p>
            <p style="margin: 5px 0;">🌱 Planta sensitiva</p>
          </div>
        </div>
        <p style="margin: 10px 0;">El moriviví es una planta que reacciona al tacto cerrando sus hojas:</p>
        <ul>
          <li>Reacción de defensa natural</li>
          <li>Popular por su curiosa respuesta al estímulo</li>
          <li>Usada con fines educativos y medicinales</li>
        </ul>
        <p style="text-align: center; font-style: italic; margin-bottom: 0;">
          "¡Tócala y verás cómo se esconde!"
        </p>
      `;
      addCloseButton(moriPanel);

      // Panel de información del Zumbadorcito
      const booPanel = document.getElementById('boo-info');
      booPanel.innerHTML = `
        <h2 style="color: lightblue; text-shadow: 2px 2px 0 navy;">🐦 Zumbadorcito</h2>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <img src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/106844321/320" 
               alt="Zumbadorcito">
          <div>
            <p style="margin: 5px 0; font-weight: bold;">Nombre científico: <em>Mellisuga helenae</em></p>
            <p style="margin: 5px 0;">🌸 El colibrí más pequeño del mundo</p>
          </div>
        </div>
        <p style="margin: 10px 0;">El zumbadorcito es una joya voladora endémica del Caribe:</p>
        <ul>
          <li>Mide solo unos 5-6 cm</li>
          <li>Puede batir sus alas hasta 80 veces por segundo</li>
          <li>Es vital para la polinización de muchas plantas</li>
        </ul>
        <p style="text-align: center; font-style: italic; margin-bottom: 0;">
          "¡Pequeño pero poderoso!"
        </p>
      `;
      addCloseButton(booPanel);

      // Panel de información del Flamboyán
      const starPanel = document.getElementById('star-info');
      starPanel.innerHTML = `
        <h2 style="color: orange; text-shadow: 2px 2px 0 darkred;">🌳 Flamboyán</h2>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Delonix_regia_01.jpg/1280px-Delonix_regia_01.jpg"
               alt="Flamboyán">
          <div>
            <p style="margin: 5px 0; font-weight: bold;">Nombre científico: <em>Delonix regia</em></p>
            <p style="margin: 5px 0;">🔥 Árbol de fuego tropical</p>
          </div>
        </div>
        <p style="margin: 10px 0;">El flamboyán es famoso por su espectacular floración roja:</p>
        <ul>
          <li>Originario de Madagascar</li>
          <li>Muy común en el Caribe y zonas tropicales</li>
          <li>Símbolo de belleza, sombra y cultura popular</li>
        </ul>
        <p style="text-align: center; font-style: italic; margin-bottom: 0;">
          "Cuando florece, el verano comienza ☀️"
        </p>
      `;
      addCloseButton(starPanel);

      // Panel de información del C3TK
      const c3tkPanel = document.getElementById('c3tk-info');
      c3tkPanel.innerHTML = `
        <h2 style="color: lightblue; text-shadow: 2px 2px 0 navy;">🔬 C3tec de Caguas</h2>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/a5/09/33/criollo-centre-for-science.jpg?w=1200&h=1200&s=1" 
               alt="C3tec de Caguas">
          <div>
            <p style="margin: 5px 0; font-weight: bold;">Nombre completo: <em>Centro Criollo de Ciencia y Tecnología del Caribe</em></p>
            <p style="margin: 5px 0;">🌟 Donde la ciencia cobra vida</p>
          </div>
        </div>
        <p style="margin: 10px 0;">El C3tec es un espacio interactivo para aprender sobre ciencia y tecnología de manera divertida:</p>
        <ul>
          <li>Cuenta con exhibiciones permanentes y temporales</li>
          <li>Incluye un laboratorio "Makerspace" para crear e innovar</li>
          <li>Ideal para estudiantes, familias y curiosos de todas las edades</li>
        </ul>
        <p style="text-align: center; font-style: italic; margin-bottom: 0;">
          "¡Explora, imagina y crea!"
        </p>
      `;
      addCloseButton(c3tkPanel);

      // Panel de información de la Alcaldía
      const alcalPanel = document.getElementById('alcal-info');
      alcalPanel.innerHTML = `
        <h2 style="color: lightblue; text-shadow: 2px 2px 0 navy;">🏛️ Casa Alcaldía de Caguas</h2>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <img src="https://live.staticflickr.com/5530/11803444365_f7021f3ff2_b.jpg"
               alt="Casa Alcaldía de Caguas">
          <div>
            <p style="margin: 5px 0; font-weight: bold;">Nombre oficial: <em>Casa Alcaldía William Miranda Marín</em></p>
            <p style="margin: 5px 0;">🏙 Símbolo de gobierno y cultura en el corazón de Caguas</p>
          </div>
        </div>
        <p style="margin: 10px 0;">La Casa Alcaldía es sede del gobierno municipal de Caguas:</p>
        <ul>
          <li>Ubicada en la plaza central de la ciudad</li>
          <li>Lugar emblemático de eventos cívicos y culturales</li>
          <li>Nombrada en honor al exalcalde William Miranda Marín</li>
        </ul>
        <p style="text-align: center; font-style: italic; margin-bottom: 0;">
          "¡Centro de liderazgo, historia y comunidad!"
        </p>
      `;
      addCloseButton(alcalPanel);

      // Panel de información del Centro de Bellas Artes
      const centrPanel = document.getElementById('centr-info');
      centrPanel.innerHTML = `
        <h2 style="color: orchid; text-shadow: 2px 2px 0 purple;">🎭 Bellas Artes de Caguas</h2>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <img src="https://www.discoverpuertorico.com/sites/default/files/listing_images/profile/9943/7Y6A3068-2-_DBD6AE4F-98AA-29B3-48E0414E4AC5BB62-dbd69fca9308655_dbd6b75e-fb24-bf0a-05cae8bddb33f8e3.jpg"
               alt="Centro de Bellas Artes de Caguas">
          <div>
            <p style="margin: 5px 0; font-weight: bold;">Nombre completo: <em>Centro de Bellas Artes de Caguas</em></p>
            <p style="margin: 5px 0;">🎨 Espacio para el arte, la música y el teatro</p>
          </div>
        </div>
        <p style="margin: 10px 0;">Un centro cultural de gran relevancia para el desarrollo artístico del municipio:</p>
        <ul>
          <li>Ofrece conciertos, obras y eventos comunitarios</li>
          <li>Cuenta con sala de teatro moderna y espacios de exposición</li>
          <li>Fomenta el talento local y puertorriqueño</li>
        </ul>
        <p style="text-align: center; font-style: italic; margin-bottom: 0;">
          "¡Donde el arte cobra vida en el corazón del pueblo!"
        </p>
      `;
      addCloseButton(centrPanel);

      // Panel de información de la India Taína
      const indiaPanel = document.getElementById('india-info');
      indiaPanel.innerHTML = `
        <h2 style="color: salmon; text-shadow: 2px 2px 0 maroon;">🪶 Monumento de la Taína</h2>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <img src="https://caguas.gov.pr/wp-content/uploads/2019/08/Portal-Monumento-a-la-Herencia-Indigena.jpg"
               alt="Monumento de la Taína de Caguas">
          <div>
            <p style="margin: 5px 0; font-weight: bold;">Ubicación: <em>Entrada norte de Caguas, PR-1</em></p>
            <p style="margin: 5px 0;">🗿 Tributo a los pueblos indígenas de Puerto Rico</p>
          </div>
        </div>
        <p style="margin: 10px 0;">Este monumento conmemora la presencia y herencia taína en la isla:</p>
        <ul>
          <li>Obra de arte de gran escala y valor simbólico</li>
          <li>Representa a una mujer taína portando símbolos culturales</li>
          <li>Emblema de orgullo para Caguas y todo Puerto Rico</li>
        </ul>
        <p style="text-align: center; font-style: italic; margin-bottom: 0;">
          "Nuestra historia vive en cada piedra y en cada raíz 🌿"
        </p>
      `;
      addCloseButton(indiaPanel);

      // Panel de información del Jungle Guardian
      const junglePanel = document.getElementById('jungle-info');
      junglePanel.innerHTML = `
        <h2 style="color: lightgreen; text-shadow: 2px 2px 0 darkgreen;">🛡️ Jungle Guardian</h2>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1tH7xl2mXvasTPUVxjdjQufDQP08A5EP3du2WPFAdYQkbfinA4HWINt8FwGfhCp_uPf3RKSwdS24Wsacv44DEgR8_V_NeeKkzL1qSSyadPh_U0QwdDMY4um3CxrO92N-wndcYxVEj1RA/s1600/caguas+africana+2.jpg"
               alt="Jungle Guardian">
          <div>
            <p style="margin: 5px 0; font-weight: bold;">Ubicación: <em>Jardín Botánico y Cultural de Caguas</em></p>
            <p style="margin: 5px 0;">🧝‍♂️ Protector simbólico de la flora caribeña</p>
          </div>
        </div>
        <p style="margin: 10px 0;">La estatua Jungle Guardian representa la conexión mística con la naturaleza:</p>
        <ul>
          <li>Icono ecológico del Jardín Botánico de Caguas</li>
          <li>Escultura inspirada en figuras fantásticas del bosque</li>
          <li>Una invitación a proteger el medioambiente y sus especies</li>
        </ul>
        <p style="text-align: center; font-style: italic; margin-bottom: 0;">
          "Guardianes de la selva, protectores de la vida 🌿"
        </p>
      `;
      addCloseButton(junglePanel);

      // Panel de información del Pitirre
      const pitirrePanel = document.getElementById('pitirre-info');
      pitirrePanel.innerHTML = `
        <h2 style="color: skyblue; text-shadow: 2px 2px 0 navy;">🐦 El Pitirre</h2>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Puerto_Rican_Gray_Kingbird.jpg/1200px-Puerto_Rican_Gray_Kingbird.jpg"
               alt="Pitirre">
          <div>
            <p style="margin: 5px 0; font-weight: bold;">Nombre científico: <em>Tyrannus dominicensis</em></p>
            <p style="margin: 5px 0;">⚔️ Defensor audaz del cielo puertorriqueño</p>
          </div>
        </div>
        <p style="margin: 10px 0;">El pitirre es conocido por su valentía al defender su territorio, incluso de aves más grandes:</p>
        <ul>
          <li>Común en zonas abiertas y campos de todo Puerto Rico</li>
          <li>Famoso por su vuelo agresivo contra predadores</li>
          <li>Símbolo de coraje y resistencia en la cultura popular</li>
        </ul>
        <p style="text-align: center; font-style: italic; margin-bottom: 0;">
          "¡Chirrí chirrí! ¡Aquí mando yo!"
        </p>
      `;
      addCloseButton(pitirrePanel);

      // Panel de información del Reloj Floral
      const relojPanel = document.getElementById('reloj-info');
      relojPanel.innerHTML = `
        <h2 style="color: gold; text-shadow: 2px 2px 0 darkorange;">🌸 Reloj Floral de Caguas</h2>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEirYL32abYT5MkCq__4w1_jIJuYivp_BBEWP7qBgj3xMe_LBvqtdCp7aDW67MCWHnE0Xf6q4Gr2H8dCKxDkNbOfO8WR0lwQPi4PfRxd6SlXy_nhENbsdShCiwxrpvjzeeIvvDi7_F0GFD0/w1200-h630-p-k-no-nu/caguas+reloj.jpg"
               alt="Reloj Floral de Caguas">
          <div>
            <p style="margin: 5px 0; font-weight: bold;">Ubicación: <em>Plaza Santiago R. Palmer</em></p>
            <p style="margin: 5px 0;">⏰ Monumento botánico en el corazón de la ciudad</p>
          </div>
        </div>
        <p style="margin: 10px 0;">El Reloj Floral es una atracción turística emblemática de Caguas:</p>
        <ul>
          <li>Funciona como un reloj real y está rodeado de jardines florales</li>
          <li>Fue inaugurado en 2004 como parte del embellecimiento urbano</li>
          <li>Es uno de los pocos relojes florales mecánicos en el Caribe</li>
        </ul>
        <p style="text-align: center; font-style: italic; margin-bottom: 0;">
          "Un ícono vivo que marca el ritmo de la ciudad 🌼"
        </p>
      `;
      addCloseButton(relojPanel);

      // Panel de información de William Miranda Marín
      const williePanel = document.getElementById('willie-info');
      williePanel.innerHTML = `
        <h2 style="color: lightsteelblue; text-shadow: 2px 2px 0 navy;">🧑‍💼 William Miranda Marín</h2>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <img src="https://images.findagrave.com/photos/2010/154/53228410_127567210214.jpg?size=photos250"
               alt="William Miranda Marín">
          <div>
            <p style="margin: 5px 0; font-weight: bold;">Alcalde de Caguas (1997–2010)</p>
            <p style="margin: 5px 0;">🕊 Visionario, líder y defensor del desarrollo humano</p>
          </div>
        </div>
        <p style="margin: 10px 0;">Esta escultura honra a una de las figuras más queridas y transformadoras de Caguas:</p>
        <ul>
          <li>Impulsó la autogestión comunitaria y la educación</li>
          <li>Fundó el C3TEC y revitalizó la ciudad criolla</li>
          <li>Recordado por su humanidad y legado perdurable</li>
        </ul>
        <p style="text-align: center; font-style: italic; margin-bottom: 0;">
          "¡Adelante, hacia el desarrollo pleno del ser humano!"
        </p>
      `;
      addCloseButton(williePanel);

      // Panel de información de la UAGM
      const uagmPanel = document.getElementById('uagm-info');
      uagmPanel.innerHTML = `
        <h2 style="color: deepskyblue; text-shadow: 2px 2px 0 navy;">🎓 UAGM – Gurabo</h2>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <img src="https://web.uagm.edu/campus/sites/default/files/inline-images/logo_cir_uagm.png"
               alt="UAGM Gurabo" style="background: white;">
          <div>
            <p style="margin: 5px 0; font-weight: bold;">Nombre completo: <em>Universidad Ana G. Méndez – Recinto de Gurabo</em></p>
            <p style="margin: 5px 0;">📘 Educación de excelencia en el corazón de Puerto Rico</p>
          </div>
        </div>
        <p style="margin: 10px 0;">La UAGM-Gurabo es una de las instituciones universitarias más reconocidas del país:</p>
        <ul>
          <li>Fundada en 1972 como Universidad del Turabo</li>
          <li>Destacada en programas de salud, tecnología y negocios</li>
          <li>Comprometida con la innovación y el desarrollo comunitario</li>
        </ul>
        <p style="text-align: center; font-style: italic; margin-bottom: 0;">
          "Transformamos vidas a través de la educación 🎓"
        </p>
      `;
      addCloseButton(uagmPanel);
    }

function showInfoPanel(modelId) {
  // Ocultar todos los paneles primero
  document.querySelectorAll('.info-panel').forEach(panel => {
    panel.style.display = 'none';
  });

  // Mostrar el panel correspondiente al modelo
  const panel = document.getElementById(`${modelId}-info`);
  if (panel) {
    panel.style.display = 'block';
    panel.style.position = 'fixed';
    panel.style.top = '20px';
    panel.style.left = '50%';
    panel.style.transform = 'translateX(-50%)';
    const panelWidth = Math.min(window.innerWidth * 0.95, 700);
    panel.style.width = `${panelWidth}px`;
    panel.style.maxHeight = '80vh';
    panel.style.overflowY = 'auto';
    panel.style.padding = '20px';
    panel.style.boxSizing = 'border-box';
  }
}

function addCloseButton(panel) {
  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "×";
  closeBtn.className = "close-btn";
  closeBtn.addEventListener("click", () => {
    panel.style.display = "none";
  });
  panel.appendChild(closeBtn);
}