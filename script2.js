// Parte 2 //
window.onload = function() {
    setTimeout(function() {
        let loadingScreen = document.getElementById('loading-screen');
        let loadingImg = document.getElementById('loading-img');
        let content = document.getElementById('content');
        
        setTimeout(() => {
            loadingImg.style.opacity = '1';
        }, 100);

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
    }, 1000); // duracion de eva //
};
