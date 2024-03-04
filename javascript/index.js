
const menuHamburguesa = document.querySelector("#menu-hamburguesa")

menuHamburguesa.addEventListener("click",()=>{

    const menuDesplegar = menuHamburguesa.querySelector(".menu-desplegar")
    menuDesplegar.classList.add("menu-active")
    const currentPath = window.location.pathname;
    if (currentPath=="/index.html"){
        menuDesplegar.innerHTML = `
        <div class="menu-contenedor">
            <span class="menu-item"><i class="fa-regular fa-calendar fa-lg me-2"></i><a class="menu-link" href="index.html">DAILY</a></span>
            <span class="menu-item"><i class="fa-regular fa-futbol fa-lg me-2"></i><a class="menu-link" href="html/futbol.html">FUTBOL</a></span>
            <span class="menu-item"><i class="fa-solid fa-basketball fa-lg me-2"></i><a class="menu-link" href="html/basquet.html">BASQUET</a></span>
            <span class="menu-item"><i class="fa-solid fa-table-tennis-paddle-ball fa-lg me-2"></i><a class="menu-link" href="html/tenis.html">TENIS</a></span>
        </div>
    
        `
    }
    else{

        menuDesplegar.innerHTML = `
        <div class="menu-contenedor" >
            <span class="menu-item"><i class="fa-regular fa-calendar fa-lg me-2"></i><a class="menu-link" href="../index.html">DAILY</a></span>
            <span class="menu-item"><i class="fa-regular fa-futbol fa-lg me-2"></i><a class="menu-link" href="futbol.html">FUTBOL</a></span>
            <span class="menu-item"><i class="fa-solid fa-basketball fa-lg me-2"></i><a class="menu-link" href="basquet.html">BASQUET</a></span>
            <span class="menu-item"><i class="fa-solid fa-table-tennis-paddle-ball fa-lg me-2"></i><a class="menu-link" href="tenis.html">TENIS</a></span>
        </div>
        
        `

    }
   

   


})

document.addEventListener("click", () => {

    const menuDesplegar = document.querySelector(".menu-desplegar");
    if (menuDesplegar && !menuHamburguesa.contains(event.target)) {
        menuDesplegar.classList.remove("menu-active")

    }
});


document.addEventListener("touchmove", () =>{
    const menuDesplegar = document.querySelector(".menu-desplegar");
    // Verificar si el evento touchmove ocurrió dentro del menú desplegable
    if (menuDesplegar && menuDesplegar.contains(event.target)) {
        event.preventDefault(); // Prevenir el desplazamiento táctil dentro del menú desplegable
    }
}, { passive: false })