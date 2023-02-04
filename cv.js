/* abre ventana para mail*/

document.getElementById('mail').addEventListener('click',function() {
    window.open('mailto:lindaperez@mail.com');
})

/*Abre ventana whatsapp Web*/

document.getElementById('telefono2').addEventListener('click',function(){
    window.open('http://wa.me/+5491164886534')
})

/*Muestra/Oculta redes sociales*/

function redesSociales() {
    var x = document.getElementById("redes");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}