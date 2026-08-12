// Mobile Menu
const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if(menuButton){
    menuButton.addEventListener("click",()=>{
        menu.classList.toggle("active");
    });
}


// Scroll Animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{
    cards.forEach(card=>{
        const posisi = card.getBoundingClientRect().top;
        const tinggi = window.innerHeight;

        if(posisi < tinggi - 100){
            card.classList.add("show");
        }
    });
});


// Button WhatsApp
function daftar(){
    window.open(
    "https://wa.me/6281234567890?text=Halo%20ClassUp%20saya%20ingin%20mendaftar",
    "_blank"
    );
}


// Login sederhana
function login(){

let email=document.getElementById("email").value;
let password=document.getElementById("password").value;

if(email=="" || password==""){
alert("Email dan password wajib diisi");
}else{
alert("Login berhasil");
}

}
