// Mengambil elemen form login
var loginForm = document.querySelector('.login-form');

// Menambahkan event listener pada saat form di-submit
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Menghentikan aksi default form submit

  // Mendapatkan nilai input dari form
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Lakukan validasi sederhana (contoh: email harus berisi @)
  if (!email.includes('@')) {
    alert('Invalid email!');
    return;
  }

  // Lakukan pengolahan data login
  // Contoh sederhana: Memeriksa email dan password
  if (email === 'admin@gmail.com' && password === '12345') {
    // Jika login berhasil, arahkan pengguna ke halaman beranda
    window.location.href = 'homepage.html';
  } else {
    // Jika login gagal, tampilkan pesan error
    alert('Invalid email or password!');
  }

  loginForm.reset(); // Mengosongkan form setelah proses login
});
