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
    }, 5000); // duracion de eva //
};

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("boton");
    
    button.addEventListener("click", function() {
        if (button.click) {
            setTimeout(() => {
                window.location.href = "parte2.html";
            }, 1000); 
        }
    });
});

