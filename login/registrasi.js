// Mengambil elemen form registrasi
var registrationForm = document.getElementById('registration-form');

// Menambahkan event listener pada saat form di-submit
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Menghentikan aksi default form submit

  // Mendapatkan nilai input dari form
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;

  // Lakukan validasi sederhana
  if (password !== confirmPassword) {
    alert('Password and confirm password do not match!');
    return;
  }

  // Lakukan pengolahan data registrasi
  // ... (Tambahkan logika sesuai kebutuhan Anda)

  // Tampilkan pesan sukses
  alert('Registration successful!');
  registrationForm.reset(); // Mengosongkan form setelah sukses registrasi

    // Kembali ke halaman login
    window.location.href = 'login.html';
});


