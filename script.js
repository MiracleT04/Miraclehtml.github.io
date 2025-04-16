// Mengatur event listener untuk tombol
document.addEventListener("DOMContentLoaded", function() {
  const tombol = document.getElementById("tombol");
  tombol.addEventListener("click", function() {
    alert("Tombol diklik!");
  });
});

// Mengatur animasi untuk elemen
const elemen = document.getElementById("elemen");
elemen.addEventListener("mouseover", function() {
  elemen.style.background = "yellow";
});
elemen.addEventListener("mouseout", function() {
  elemen.style.background = "";
});

// Mengatur validasi form
const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  if (nama === "" || email === "") {
    alert("Nama dan email harus diisi!");
  } else {
    alert("Form berhasil dikirim!");
  }
});
