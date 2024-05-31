var icon = document.getElementById("darklight")
var logoNav = document.getElementById("logo-nav")
var foot = document.getElementById("logofooter")
icon.onclick = function (){
    document.body.classList.toggle("dark_theme")
    if (document.body.classList.contains("dark_theme")){
        icon.src = "../Assets/sun.png"
        logoNav.src = "../Assets/logo-red.png"
        foot.src = "../Assets/logo - dark mode.png"
    }
    else {
        icon.src = "../Assets/moon.png"
        logoNav.src = "../Assets/Logo-main.png"
        foot.src = "../Assets/Logo-alt.png"
    }
}