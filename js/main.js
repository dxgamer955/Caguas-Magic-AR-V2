// Variables globales
let mindarThree;
let mixers = [];
const modelMap = {};
let activeModel = null;
let activeAnchor = null;
let originalScales = {};
let isDragging = false;
let lastTouchX = 0;
let lastTouchY = 0;
let lastDistance = 0;
let isRotatingX = false;
let isRotatingY = false;
let rotationSpeed = 0.02;
let smoothingFactor = 0.3;
let targetFPS = 30;
let lastRenderTime = 0;

const loader = new THREE.GLTFLoader();

// Función para iniciar AR
const startAR = async () => {
  try {
    const loadingScreen = document.getElementById('loading-screen');
    const errorMessage = document.getElementById('error-message');
    
    // Crear paneles de información
    createInfoPanels();
    
    // Configurar botón de información
    const infoBtn = document.getElementById('info-btn');
    infoBtn.addEventListener('click', () => {
      if (activeModel) {
        const modelId = Object.keys(modelMap).find(key => modelMap[key] === activeModel);
        if (modelId) {
          const panel = document.getElementById(`${modelId}-info`);
          if (panel.style.display === 'block') {
            panel.style.display = 'none';
          } else {
            showInfoPanel(modelId);
          }
        }
      }
    });

    // Actualizar estado de la cámara
    document.getElementById('camera-status').textContent = '📷 Cámara: Solicitando acceso...';
    
    // Verificar compatibilidad
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error('API de cámara no soportada en este navegador');
    }

    // Mostrar botones de zoom
    /*
    document.getElementById('zoom-in-btn').style.display = 'block';
    document.getElementById('zoom-out-btn').style.display = 'block';
    */

    
    // Inicializar MindAR
    mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.getElementById('ar-container'),
      imageTargetSrc: './targets.mind',
      maxTrack: 1,
      uiLoading: 'yes',
      uiScanning: 'yes',
      filterMinCF: 0.3,
      filterBeta: 1000,
      missTolerance: 10,
      warmupTolerance: 5
    });
    
    const { renderer, scene, camera } = mindarThree;
    
    // Configurar renderer
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    
    // Configurar iluminación
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 1);
    scene.add(directionalLight);
    
    // Cargar modelos
    await loadModels(mindarThree);
    
    // Iniciar MindAR
    await mindarThree.start();
    
    document.getElementById('marker-status-ui').textContent = '✅ Componentes de marcador: Inicializados';
    document.getElementById('camera-status').textContent = '✅ Cámara: Activa';
    
    // Configurar gestos táctiles
    setupTouchGestures();
    
    // Ocultar pantalla de carga
    loadingScreen.style.display = 'none';
    
    // Bucle de renderizado
    const clock = new THREE.Clock();
    renderer.setAnimationLoop((timestamp) => {
      const deltaTime = timestamp - lastRenderTime;
      const targetInterval = 1000 / targetFPS;
      
      if (deltaTime >= targetInterval) {
        lastRenderTime = timestamp;
        
        const delta = clock.getDelta();
        mixers.forEach(mixer => mixer.update(delta));
        
        updateModels();
        
        renderer.render(scene, camera);
      }
    });
    
  } catch (error) {
    console.error('Error al iniciar AR:', error);
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = `Error: ${error.message}`;
    errorMessage.style.display = 'block';
    document.getElementById('camera-status').textContent = '❌ Cámara: Error de acceso';
    
    // Sugerencias para errores comunes
    if (error.message.includes('targets.mind')) {
      errorMessage.innerHTML += '<br>El archivo targets.mind no se encontró. Asegúrate de que existe en la ubicación correcta.';
    } else if (error.message.includes('permission')) {
      errorMessage.innerHTML += '<br>Por favor, permite el acceso a la cámara en la configuración de tu navegador.';
    } else if (error.message.includes('https')) {
      errorMessage.innerHTML += '<br>Nota: La cámara solo funciona en conexiones HTTPS o localhost.';
    }
  }
};

// Evento para el botón de inicio
document.getElementById('start-button').addEventListener('click', startAR);

// Manejar redimensionamiento de ventana
window.addEventListener('resize', () => {
  if (mindarThree) {
    const { renderer } = mindarThree;
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
});