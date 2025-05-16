// Modelos a cargar
const models = [
  { id: 'alcal', path: 'models/ALCALDIA.glb', scale: 0.08, targetIndex: 0 },
  { id: 'c3tk', path: 'models/C3TK.glb', scale: 0.08, targetIndex: 1 },
  { id: 'centr', path: 'models/CENTRO.glb', scale: 0.08, targetIndex: 2 },
  { id: 'star', path: 'models/flamboyan.glb', scale: 0.08, targetIndex: 3 },
  { id: 'jungle', path: 'models/jungle_gurdian.glb', scale: 0.08, targetIndex: 4 },
  { id: 'india', path: 'models/INDIA.glb', scale: 0.06, targetIndex: 5 },
  { id: 'morivivi', path: 'models/MORIVIVI.glb', scale: 0.1, targetIndex: 6 },
  { id: 'pitirre', path: 'models/PITIRRE.glb', scale: 0.1, targetIndex: 7 },
  { id: 'reloj', path: 'models/RELOJ.glb', scale: 0.08, targetIndex: 8 },
  { id: 'uagm', path: 'models/UAGM.glb', scale: 0.1, targetIndex: 9 },
  { id: 'willie', path: 'models/WILLIAM.glb', scale: 0.08, targetIndex: 10 },
  { id: 'boo', path: 'models/zumbadorcito_noshader.glb', scale: 0.07, targetIndex: 11 }
];

// Cargar modelos
async function loadModels(mindarThree) {
  for (const modelData of models) {
    const anchor = mindarThree.addAnchor(modelData.targetIndex);
    
    await new Promise((resolve) => {
      loader.load(modelData.path, (gltf) => {
        const model = gltf.scene;
        originalScales[modelData.id] = modelData.scale;
        
        model.userData = {
          targetPosition: new THREE.Vector3(),
          targetQuaternion: new THREE.Quaternion(),
          smoothedPosition: new THREE.Vector3(),
          smoothedQuaternion: new THREE.Quaternion(),
          manualRotation: new THREE.Euler(),
          originalRotation: new THREE.Euler(),
          baseScale: modelData.scale,
          visible: false
        };
        
        model.scale.set(0, 0, 0);
        model.position.set(0, -1, 0);
        model.rotation.set(-Math.PI / 2, 0, 0);

        anchor.onTargetFound = () => {
          activeModel = model;
          activeAnchor = anchor;
          document.getElementById('zoom-in-btn').style.display = 'block';
          document.getElementById('zoom-out-btn').style.display = 'block';
          document.getElementById('info-btn').style.display = 'block';
          document.getElementById('reset-btn').style.display = 'block';
          model.userData.visible = true;
          model.userData.manualRotation.set(0, 0, 0);
        };
        
        anchor.onTargetLost = () => {
          if (activeModel === model) {
            activeModel = null;
            activeAnchor = null;
            document.getElementById('zoom-in-btn').style.display = 'none';
            document.getElementById('zoom-out-btn').style.display = 'none';
            document.getElementById('info-btn').style.display = 'none';
            document.getElementById('reset-btn').style.display = 'none';
            model.userData.visible = false;
            
            document.querySelectorAll('.info-panel').forEach(panel => {
              panel.style.display = 'none';
            });
          }
        };

        anchor.group.add(model);
        
        if (gltf.animations && gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(model);
          mixers.push(mixer);
          
          gltf.animations.forEach((clip) => {
            const action = mixer.clipAction(clip);
            action.play();
          });
        }
        
        modelMap[modelData.id] = model;
        resolve();
      }, undefined, (error) => {
        console.error(`Error cargando modelo ${modelData.path}:`, error);
        resolve();
      });
    });
  }
}

// Actualizar modelos en el bucle de renderizado
function updateModels() {
  for (const id in modelMap) {
    const model = modelMap[id];
    const anchor = mindarThree.anchors[models.find(m => m.id === id).targetIndex];
    
    if (anchor.group.visible) {
      // Actualizar objetivos
      model.userData.targetPosition.copy(anchor.group.position);
      model.userData.targetQuaternion.copy(anchor.group.quaternion);
      
      // Aplicar suavizado
      model.userData.smoothedPosition.lerp(model.userData.targetPosition, smoothingFactor);
      model.userData.smoothedQuaternion.slerp(model.userData.targetQuaternion, smoothingFactor);
      
      // Aplicar al modelo
      model.position.copy(model.userData.smoothedPosition);
      model.quaternion.copy(model.userData.smoothedQuaternion);
      
      // Aplicar rotación manual si existe
      if (model.userData.manualRotation) {
        model.rotation.x += model.userData.manualRotation.x;
        model.rotation.y += model.userData.manualRotation.y;
        model.rotation.z += model.userData.manualRotation.z;
      }
      
      // Suavizado de escala
      const targetScale = model.userData.baseScale;
      model.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    } else {
      // Desvanecer modelo cuando no está visible
      model.scale.lerp(new THREE.Vector3(0, 0, 0), 0.1);
    }
  }
}