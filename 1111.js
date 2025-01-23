const videos = document.querySelectorAll('.videosTragos'); // Asegurate de usar la misma clase que en tu CSS/HTML

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.play(); // Reproduce el video cuando está visible
    } else {
      entry.target.pause(); // Pausa el video cuando no está visible
    }
  });
}, {
  threshold: 0.5, // Se reproduce cuando al menos el 50% del video es visible
});

// Observar cada video de la lista
videos.forEach((video) => {
  video.pause(); // Inicialmente pausados
  observer.observe(video); // Configuramos el observador
});