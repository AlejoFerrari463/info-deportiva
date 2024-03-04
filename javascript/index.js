const toogler = document.querySelector("#toogler");


if (localStorage.getItem("tema") == "light") {
  const todos = document.querySelectorAll(".dark-mode");

  todos.forEach((element) => {

    element.classList.replace("dark-mode", "light-mode");

    toogler.style.boxShadow = "0 0 10px black"

    const active = document.querySelector(".toogler-tema");
    active.style.transition = "none";
    active.classList.add("active");

    
    let header = document.querySelector(".headers-fondo")
    header.style.backgroundColor = "#F5A454"
    let links = document.querySelectorAll(".nav-link")
    links.forEach((element)=>{
        element.style.color = "black"
        element.addEventListener("mouseenter", ()=> {
            element.style.color = "white";
        });
            element.addEventListener("mouseleave", ()=> {
            element.style.color = "#291D1E"; 
        });

    })
    
    let h1 = document.querySelectorAll("h1");

    h1.forEach((element)=>{
        element.style.color = "black"
    })

    let futbol = document.querySelectorAll(".cards-futbol");
    let tenis = document.querySelectorAll(".cards-tenis");
    let basquet = document.querySelectorAll(".cards-basquet");
    let span = document.querySelectorAll("span");


    futbol.forEach((element) => {
      element.style.backgroundColor = "white";
      element.style.color = "black";
      element.style.boxShadow = "3px 3px 12px black, -3px -3px 12px  black";
    });

    tenis.forEach((element) => {
      element.style.backgroundColor = "white";
      element.style.color = "black";
      element.style.boxShadow = "3px 3px 12px black, -3px -3px 12px  black";
    });

    basquet.forEach((element) => {
      element.style.backgroundColor = "white";
      element.style.color = "black";
      element.style.boxShadow = "3px 3px 12px black, -3px -3px 12px  black";
    });

    span.forEach((element) => {
      element.style.color = "black";
    });


   

  });

} 
else {

  const todos = document.querySelectorAll(".light-mode");

  todos.forEach((element) => {

    element.classList.replace("light-mode", "dark-mode");
    toogler.style.boxShadow = "0 0 10px white"



    const active = document.querySelector(".toogler-tema");
    active.style.transition = "0.4s left";
    active.classList.remove("active");

    localStorage.setItem("tema", "dark");

    let header = document.querySelector(".headers-fondo")
    header.style.backgroundColor = "#291D1E"
    let links = document.querySelectorAll(".nav-link")
    links.forEach((element)=>{
        element.style.color = "#F5A454"
        element.addEventListener("mouseenter", ()=> {
            element.style.color = "#F6D7AC";
        });
            element.addEventListener("mouseleave", ()=> {
            element.style.color = "#F5A454"; 
        });

    })

    
    let h1 = document.querySelectorAll("h1");

    h1.forEach((element)=>{
        element.style.color = "white"
    })
    

    let futbol = document.querySelectorAll(".cards-futbol");
    let tenis = document.querySelectorAll(".cards-tenis");
    let basquet = document.querySelectorAll(".cards-basquet");
    let span = document.querySelectorAll("span");
   

    futbol.forEach((element) => {
      element.style.backgroundColor = "#291D1E";
      element.style.color = "#F5A454";
      element.style.boxShadow = "3px 3px 12px #F6D7AC, -3px -3px 12px  #F6D7AC";
    });

    tenis.forEach((element) => {
      element.style.backgroundColor = "#291D1E";
      element.style.color = "#F5A454";
      element.style.boxShadow = "3px 3px 12px #F6D7AC, -3px -3px 12px  #F6D7AC";
    });

    basquet.forEach((element) => {
      element.style.backgroundColor = "#291D1E";
      element.style.color = "#F5A454";
      element.style.boxShadow = "3px 3px 12px #F6D7AC, -3px -3px 12px  #F6D7AC";
    });

    span.forEach((element) => {
      element.style.color = "#F6D7AC";
    });

  });

}





toogler.addEventListener("click", () => {

  const mode = document.querySelector(".dark-mode");

  if (mode) {

    document.body.classList.replace("dark-mode", "light-mode");
    toogler.style.boxShadow = "0 0 10px black"

    const active = document.querySelector(".toogler-tema");
    active.style.transition = "0.4s left";
    active.classList.add("active");

    localStorage.setItem("tema", "light");

    let header = document.querySelector(".headers-fondo")
    header.style.backgroundColor = "#F5A454"

    let links = document.querySelectorAll(".nav-link")
    links.forEach((element)=>{
        element.style.color = "black"
        element.addEventListener("mouseenter", ()=> {
            element.style.color = "white";
        });
            element.addEventListener("mouseleave", ()=> {
            element.style.color = "#291D1E"; 
        });

    })

    let h1 = document.querySelectorAll("h1");
    h1.forEach((element)=>{
        element.style.color = "black"
    })


    let futbol = document.querySelectorAll(".cards-futbol");
    let tenis = document.querySelectorAll(".cards-tenis");
    let basquet = document.querySelectorAll(".cards-basquet");
    let span = document.querySelectorAll("span");
    futbol.forEach((element) => {
      element.style.backgroundColor = "white";
      element.style.color = "black";
      element.style.boxShadow = "3px 3px 12px black, -3px -3px 12px  black";
    });

    tenis.forEach((element) => {
      element.style.backgroundColor = "white";
      element.style.color = "black";
      element.style.boxShadow = "3px 3px 12px black, -3px -3px 12px  black";
    });

    basquet.forEach((element) => {
      element.style.backgroundColor = "white";
      element.style.color = "black";
      element.style.boxShadow = "3px 3px 12px black, -3px -3px 12px  black";
    });

    span.forEach((element) => {
      element.style.color = "black";
    });


  } 
  else {


    document.body.classList.replace("light-mode", "dark-mode");
    toogler.style.boxShadow = "0 0 10px white"


    const active = document.querySelector(".toogler-tema");
    active.style.transition = "0.4s left";
    active.classList.remove("active");

    localStorage.setItem("tema", "dark");

    let header = document.querySelector(".headers-fondo")
    header.style.backgroundColor = "#291D1E"
    let links = document.querySelectorAll(".nav-link")
    links.forEach((element)=>{
        element.style.color = "#F5A454"
        element.addEventListener("mouseenter", ()=> {
            element.style.color = "#F6D7AC";
        });
            element.addEventListener("mouseleave", ()=> {
            element.style.color = "#F5A454"; 
        });

    })


    let h1 = document.querySelectorAll("h1");

    h1.forEach((element)=>{
        element.style.color = "white"
    })

    let futbol = document.querySelectorAll(".cards-futbol");
    let tenis = document.querySelectorAll(".cards-tenis");
    let basquet = document.querySelectorAll(".cards-basquet");
    let span = document.querySelectorAll("span");



    futbol.forEach((element) => {
      element.style.backgroundColor = "#291D1E";
      element.style.color = "#F5A454";
      element.style.boxShadow = "3px 3px 12px #F6D7AC, -3px -3px 12px  #F6D7AC";
    });

    tenis.forEach((element) => {
      element.style.backgroundColor = "#291D1E";
      element.style.color = "#F5A454";
      element.style.boxShadow = "3px 3px 12px #F6D7AC, -3px -3px 12px  #F6D7AC";
    });

    basquet.forEach((element) => {
      element.style.backgroundColor = "#291D1E";
      element.style.color = "#F5A454";
      element.style.boxShadow = "3px 3px 12px #F6D7AC, -3px -3px 12px  #F6D7AC";
    });

    span.forEach((element) => {
      element.style.color = "#F6D7AC";
    });

  }

});







const menuHamburguesa = document.querySelector("#menu-hamburguesa");

menuHamburguesa.addEventListener("click", () => {
  const menuDesplegar = menuHamburguesa.querySelector(".menu-desplegar");
  menuDesplegar.classList.add("menu-active");
  const currentPath = window.location.pathname;
  if (currentPath == "/index.html") {
    menuDesplegar.innerHTML = `
        <div class="menu-contenedor">
            <span class="menu-item"><i class="fa-regular fa-calendar fa-lg me-2"></i><a class="menu-link" href="index.html">DAILY</a></span>
            <span class="menu-item"><i class="fa-regular fa-futbol fa-lg me-2"></i><a class="menu-link" href="html/futbol.html">FUTBOL</a></span>
            <span class="menu-item"><i class="fa-solid fa-basketball fa-lg me-2"></i><a class="menu-link" href="html/basquet.html">BASQUET</a></span>
            <span class="menu-item"><i class="fa-solid fa-table-tennis-paddle-ball fa-lg me-2"></i><a class="menu-link" href="html/tenis.html">TENIS</a></span>
        </div>
    
        `;
  } 
  else {
    menuDesplegar.innerHTML = `
        <div class="menu-contenedor" >
            <span class="menu-item"><i class="fa-regular fa-calendar fa-lg me-2"></i><a class="menu-link" href="../index.html">DAILY</a></span>
            <span class="menu-item"><i class="fa-regular fa-futbol fa-lg me-2"></i><a class="menu-link" href="futbol.html">FUTBOL</a></span>
            <span class="menu-item"><i class="fa-solid fa-basketball fa-lg me-2"></i><a class="menu-link" href="basquet.html">BASQUET</a></span>
            <span class="menu-item"><i class="fa-solid fa-table-tennis-paddle-ball fa-lg me-2"></i><a class="menu-link" href="tenis.html">TENIS</a></span>
        </div>
        
        `;
  }

  if (localStorage.getItem("tema") == "light"){

    let menuDesplegar = document.querySelector(".menu-desplegar")
    menuDesplegar.style.backgroundColor = "white"
    menuDesplegar.style.boxShadow = "0px 20px 30px black"

    let menuIcons = document.querySelectorAll(".menu-item")
    menuIcons.forEach((element)=>{

        element.style.color = "black"

    })

    let menuLinks = document.querySelectorAll(".menu-link")
    menuLinks.forEach((element)=>{

        element.style.color = "black"

    })



  }

  if (localStorage.getItem("tema") == "dark"){

    let menuDesplegar = document.querySelector(".menu-desplegar")
    menuDesplegar.style.backgroundColor = "#291D1E"
    menuDesplegar.style.boxShadow = "0px 20px 30px #F6D7AC"
  }

  
 

});

document.addEventListener("click", () => {
  const menuDesplegar = document.querySelector(".menu-desplegar");
  if (menuDesplegar && !menuHamburguesa.contains(event.target)) {
    menuDesplegar.classList.remove("menu-active");
  }
});

document.addEventListener(
  "touchmove",
  () => {
    const menuDesplegar = document.querySelector(".menu-desplegar");
    // Verificar si el evento touchmove ocurrió dentro del menú desplegable
    if (menuDesplegar && menuDesplegar.contains(event.target)) {
      event.preventDefault(); // Prevenir el desplazamiento táctil dentro del menú desplegable
    }
  },
  { passive: false }
);
