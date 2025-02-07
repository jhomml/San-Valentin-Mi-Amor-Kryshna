window.onload = function() {
    setTimeout(function() {
        let loadingScreen = document.getElementById('loading-screen');
        let content = document.getElementById('content');

        //  Aplicar la pantalla de carga
        loadingScreen.style.opacity = '0';

       // Transición
        setTimeout(() => {
            loadingScreen.style.display = 'none'; 
            content.style.display = 'block'; 
            setTimeout(() => {
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }, 50);
        }, 1000); 
    }, 50); // duracion de eva //
};