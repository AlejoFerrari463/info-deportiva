
const menuHamburguesa = document.querySelector("#menu-hamburguesa")

menuHamburguesa.addEventListener("click",()=>{

    const menuDesplegar = menuHamburguesa.querySelector(".menu-desplegar")
    menuDesplegar.classList.add("menu-active")
    const currentPath = window.location.pathname;
    if (currentPath=="/index.html"){
        menuDesplegar.innerHTML = `
        <ul class="menu-contenedor">
            <li class="item-hamburguesa"><a href="index.html">DAILY</a></li>
            <li class="item-hamburguesa"><a href="html/futbol.html">FUTBOL</a></li>
            <li class="item-hamburguesa"><a href="html/basquet.html">BASQUET</a></li>
            <li class="item-hamburguesa"><a href="html/tenis.html">TENIS</a></li>
        </ul>
    
        `
    }
    else{

        menuDesplegar.innerHTML = `
        <ul class="menu-contenedor" >
            <li class="item-hamburguesa"><a href="../index.html">DAILY</a></li>
            <li class="item-hamburguesa"><a href="futbol.html">FUTBOL</a></li>
            <li class="item-hamburguesa"><a href="basquet.html">BASQUET</a></li>
            <li class="item-hamburguesa"><a href="tenis.html">TENIS</a></li>
        </ul>
        
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