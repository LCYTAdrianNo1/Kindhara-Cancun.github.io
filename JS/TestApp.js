window.addEventListener('beforeinstallprompt', (event) => {
    // Previene que Chrome 67 y versiones anteriores muestren automáticamente el mensaje de instalación
    event.preventDefault();
    // Guarda el evento para mostrar el mensaje de instalación posteriormente
    deferredPrompt = event;
    // Muestra un botón o una notificación para que el usuario instale la aplicación
    showInstallPromotion();
  });
  
  function showInstallPromotion() {
    // Muestra un botón o una notificación para que el usuario instale la aplicación
    // Por ejemplo:
    const installButton = document.getElementById('installButton');
    installButton.style.display = 'block';
    installButton.addEventListener('click', () => {
      // Muestra el mensaje de instalación guardado
      deferredPrompt.prompt();
      // Espera a que el usuario responda al mensaje de instalación
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Usuario aceptó instalar la aplicación');
        } else {
          console.log('Usuario canceló la instalación de la aplicación');
        }
        // Limpia el evento para que no se muestre nuevamente el mensaje de instalación
        deferredPrompt = null;
      });
    });
  }
