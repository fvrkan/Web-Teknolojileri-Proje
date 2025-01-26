// Form Doğrulama
document.getElementById("contactForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (name === "" || email === "") {
        alert("Lütfen tüm alanları doldurun.");
        event.preventDefault();
    }
});

// Menü Açılır/Kapanır Butonu
document.getElementById("menuToggle").addEventListener("click", function() {
    var nav = document.querySelector("nav ul");
    nav.classList.toggle("active");
});

// Devamını Oku Butonu
function toggleReadMore(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}