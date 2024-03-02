
const menuHamburguesa = document.querySelector("#menu-hamburguesa")

menuHamburguesa.addEventListener("click",()=>{

    const existe = menuHamburguesa.querySelector(".menu-desplegar")

    const desplegar = document.createElement("div")
    desplegar.classList.add("menu-desplegar")
    const menu = document.createElement("div")
    const currentPath = window.location.pathname;
    console.log(currentPath)
    if (currentPath=="/index.html"){
        menu.innerHTML = `
        <ul class="menu-contenedor">
            <li class="item-hamburguesa"><a href="index.html">DAILY</a></li>
            <li class="item-hamburguesa"><a href="html/futbol.html">FUTBOL</a></li>
            <li class="item-hamburguesa"><a href="html/basquet.html">BASQUET</a></li>
            <li class="item-hamburguesa"><a href="html/tenis.html">TENIS</a></li>
        </ul>
    
        `
    }
    else{

        menu.innerHTML = `
        <ul class="menu-contenedor" >
            <li class="item-hamburguesa"><a href="../index.html">DAILY</a></li>
            <li class="item-hamburguesa"><a href="futbol.html">FUTBOL</a></li>
            <li class="item-hamburguesa"><a href="basquet.html">BASQUET</a></li>
            <li class="item-hamburguesa"><a href="tenis.html">TENIS</a></li>
        </ul>
        
        `

    }
   
    desplegar.appendChild(menu)


    menuHamburguesa.appendChild(desplegar)

    if (existe){
        menuHamburguesa.removeChild(desplegar)
    }

})

document.addEventListener("click", () => {

    const menuDesplegar = document.querySelector(".menu-desplegar");
    console.log(menuHamburguesa.contains(event.target))
    if (menuDesplegar && !menuHamburguesa.contains(event.target)) {
        menuHamburguesa.removeChild(menuDesplegar);
    }
});


document.addEventListener("touchmove", function(event) {
    const menuDesplegar = document.querySelector(".menu-desplegar");
    // Verificar si el evento touchmove ocurrió dentro del menú desplegable
    if (menuDesplegar && menuDesplegar.contains(event.target)) {
        event.preventDefault(); // Prevenir el desplazamiento táctil dentro del menú desplegable
    }
}, { passive: false })