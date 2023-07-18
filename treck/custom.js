const navMenu = document.querySelector('.nav-menu');
const sidebarOpen = document.getElementById('sidebarOpen')
const sidebarClose = document.getElementById('sidebarClose');
const bodyOverlay = document.querySelector('.bodyOverlay')
sidebarOpen.addEventListener("click", function(){
    navMenu.classList.add("showSidebar");
    bodyOverlay.classList.add("overlayBody")
    console.log("click")
})
sidebarClose.addEventListener("click", function(){
    navMenu.classList.remove("showSidebar");
    bodyOverlay.classList.remove("overlayBody")

})

const navigation =document.querySelector('.navigation');
const stickyToggle = "stickyBar";

window.addEventListener("scroll",()=>{
    const currentScroll=window.pageYOffset;
    if(currentScroll >150){
        navigation.classList.add(stickyToggle);
    }else{
        navigation.classList.remove(stickyToggle)
    }
})