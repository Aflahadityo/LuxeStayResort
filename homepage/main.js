   // Mengambil elemen tombol navigasi
   var navbarToggler = document.querySelector('.navbar-toggler');

   // Mengambil elemen div yang akan ditampilkan atau disembunyikan saat tombol navigasi ditekan
   var navbarCollapse = document.querySelector('.navbar-collapse');

   // Menambahkan event listener pada tombol navigasi
   navbarToggler.addEventListener('click', function() {
     // Mengubah atribut 'aria-expanded' pada tombol navigasi
     var isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
     navbarToggler.setAttribute('aria-expanded', !isExpanded);

     // Menampilkan atau menyembunyikan div navigasi saat tombol navigasi ditekan
     navbarCollapse.classList.toggle('show');
   });

   document.addEventListener("DOMContentLoaded", function() {
    var carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleControls'), {
      interval: 2000, // Mengatur waktu antara transisi slide (dalam milidetik)
      wrap: true, // Mengaktifkan fitur wrap, sehingga carousel akan berputar terus-menerus
    });
  });