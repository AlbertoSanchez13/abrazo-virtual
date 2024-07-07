document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
      const mensajeCarga = document.querySelector('#loading-message');
      if (mensajeCarga) {
        mensajeCarga.innerText = '¡Enviado!';
        setTimeout(() => alert('¡Recibiste un abrazo de Alberto!'), 1000);
      }
    }, 4200);
  });