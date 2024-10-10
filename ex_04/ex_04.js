document.addEventListener('DOMContentLoaded', () => {
    const parallaxContainer = document.getElementById('parallax-container');
  
    const layers = [
      { class: 'layer-bg', speed: 0.1 },
      { class: 'layer-1', speed: 0.3 },
      { class: 'layer-2', speed: 0.5 },
      { class: 'layer-3', speed: 0.7 },
      { class: 'layer-4', speed: 0.9 },
      { class: 'layer-5', speed: 1.2 },
      { class: 'layer-6', speed: 1.5 },
      { class: 'layer-7', speed: 1.7 },
      { class: 'layer-8', speed: 1.9 },
      { class: 'layer-9', speed: 2.1 },
      { class: 'layer-10', speed: 2.3 },

    ];
  
    layers.forEach(layer => {
      const div = document.createElement('div');
      div.className = `parallax-layer ${layer.class}`;
      parallaxContainer.appendChild(div);
    });
  
    // scrole pas //
    document.body.style.overflow = 'hidden';
  
 
    document.addEventListener('mousemove', (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
  
      layers.forEach(layer => {
        const layerElement = document.querySelector(`.${layer.class}`);
        const offsetX = mouseX * layer.speed;
        const offsetY = mouseY * layer.speed;
        layerElement.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    });
  });