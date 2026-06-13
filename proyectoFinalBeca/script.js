document.addEventListener("DOMContentLoaded", () => {
    

    const botonesPanel = document.querySelectorAll(".btn-panel");

    botonesPanel.forEach(boton => {
        boton.addEventListener("click", () => {

            console.log(`Cargando sección: ${boton.innerText.trim()}`);
            
          
            alert(`Has seleccionado: ${boton.innerText.trim()}`);
        });
    });

    
    const botonesOfrecer = document.querySelectorAll(".btn-ofrecer");

    botonesOfrecer.forEach(boton => {
        boton.addEventListener("click", (e) => {
           
            const tarjeta = e.target.closest(".post-card");
            const vecino = tarjeta.querySelector(".post-autor").innerText;
            
            alert(`¡Gracias por tu solidaridad! Te estás conectando para ayudar a ${vecino}.`);
        });
    });

    
    const barraCrear = document.querySelector(".input-falso");
    if(barraCrear) {
        barraCrear.addEventListener("click", () => {
            alert("Aquí se abrirá la ventana para redactar tu solicitud de ayuda a la comunidad.");
        });
    }
});
