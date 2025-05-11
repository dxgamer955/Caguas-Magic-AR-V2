// Configurar gestos táctiles
function setupTouchGestures() {
  const container = document.getElementById('ar-container');
  
  // Eventos táctiles para rotación y escala
  container.addEventListener('touchstart', (e) => {
    if (!activeModel) return;
    
    if (e.touches.length === 1) {
      isDragging = true;
      lastTouchX = e.touches[0].clientX;
      lastTouchY = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
      isDragging = false;
      lastDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    }
  });
  
  container.addEventListener('touchmove', (e) => {
    if (!activeModel) return;
    
    if (e.touches.length === 1 && isDragging) {
      const deltaX = e.touches[0].clientX - lastTouchX;
      const deltaY = e.touches[0].clientY - lastTouchY;
      
      activeModel.userData.manualRotation.y += deltaX * 0.01;
      activeModel.userData.manualRotation.x += deltaY * 0.01;
      
      lastTouchX = e.touches[0].clientX;
      lastTouchY = e.touches[0].clientY;
    }
    
    if (e.touches.length === 2) {
      const newDistance = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      
      const scaleDelta = (newDistance - lastDistance) * 0.005;
      const currentScale = activeModel.userData.baseScale;
      const newScale = Math.max(0.01, Math.min(2, currentScale + scaleDelta));
      
      activeModel.userData.baseScale = newScale;
      lastDistance = newDistance;
    }
  });
  
  container.addEventListener('touchend', (e) => {
    if (e.touches.length < 2) lastDistance = 0;
    if (e.touches.length === 0) isDragging = false;
  });
  
  // Eventos de ratón para rotación (para navegadores de escritorio)
  let isMouseDown = false;
  container.addEventListener('mousedown', (e) => {
    if (!activeModel) return;
    
    isMouseDown = true;
    lastTouchX = e.clientX;
    lastTouchY = e.clientY;
  });
  
  container.addEventListener('mousemove', (e) => {
    if (isMouseDown && activeModel && activeModel.userData.manualRotation) {
      const deltaX = e.clientX - lastTouchX;
      const deltaY = e.clientY - lastTouchY;
      
      activeModel.userData.manualRotation.y += deltaX * 0.01;
      activeModel.userData.manualRotation.x += deltaY * 0.01;
      
      lastTouchX = e.clientX;
      lastTouchY = e.clientY;
    }
  });
  
  window.addEventListener('mouseup', () => {
    isMouseDown = false;
  });
  
  // Zoom con rueda del ratón
  container.addEventListener('wheel', (e) => {
    if (!activeModel) return;
    
    e.preventDefault();
    const scaleDelta = -e.deltaY * 0.0001;
    const currentScale = activeModel.userData.baseScale;
    const newScale = Math.max(0.01, Math.min(2, currentScale + scaleDelta));
    
    activeModel.userData.baseScale = newScale;
  }, { passive: false });
}