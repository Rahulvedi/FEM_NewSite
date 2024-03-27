
// let overlay= document.getElementById("overlay")
const onMobilMenuOpen=()=>{
    let mobileMenu = document.getElementById("mobile_menu")
    mobileMenu.classList.add("mobile_menu_open");
    document.body.classList.add('no-scroll');
    // overlay.classList.add("show")
}

const onMobilMenuClose=()=>{
    let mobileMenu = document.getElementById("mobile_menu")
    mobileMenu.classList.remove("mobile_menu_open");
    document.body.classList.remove('no-scroll');
    // overlay.classList.remove("show") 
    
}