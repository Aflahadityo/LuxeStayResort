 // Menangkap elemen-elemen HTML
 const paymentMethod = document.getElementById('payment');
 const creditCardFields = document.getElementById('credit-card-fields');
 const paypalFields = document.getElementById('paypal-fields');
 const bankTransferFields = document.getElementById('bank-transfer-fields');
 const ovoFields = document.getElementById('ovo-fields');
 const gopayFields = document.getElementById('gopay-fields');
 const amountInput = document.getElementById('amount');
 const placeOrderBtn = document.getElementById('place-order-btn');
 const loading = document.getElementById('loading');
 const successNotification = document.getElementById('success-notification');

 // Mengatur event listener untuk memantau perubahan metode pembayaran
 paymentMethod.addEventListener('change', function() {
   // Menampilkan atau menyembunyikan bidang pembayaran yang sesuai berdasarkan pilihan metode pembayaran
   switch (paymentMethod.value) {
     case 'credit-card':
       showFields(creditCardFields);
       hideFields([paypalFields, bankTransferFields, ovoFields, gopayFields]);
       break;
     case 'paypal':
       showFields(paypalFields);
       hideFields([creditCardFields, bankTransferFields, ovoFields, gopayFields]);
       break;
     case 'bank-transfer':
       showFields(bankTransferFields);
       hideFields([creditCardFields, paypalFields, ovoFields, gopayFields]);
       break;
     case 'ovo':
       showFields(ovoFields);
       hideFields([creditCardFields, paypalFields, bankTransferFields, gopayFields]);
       break;
     case 'gopay':
       showFields(gopayFields);
       hideFields([creditCardFields, paypalFields, bankTransferFields, ovoFields]);
       break;
     default:
       hideFields([creditCardFields, paypalFields, bankTransferFields, ovoFields, gopayFields]);
       break;
   }
 });

 // Menampilkan elemen HTML
 function showFields(element) {
   element.style.display = 'block';
 }

 // Menyembunyikan elemen HTML
 function hideFields(elements) {
   elements.forEach(function(element) {
     element.style.display = 'none';
   });
 }

 // Mengatur event listener untuk menghitung jumlah total saat form dikirim
 document.getElementById('checkout-form').addEventListener('submit', function(event) {
   event.preventDefault();
   loading.classList.remove('hide'); // Menampilkan loading spinner
   placeOrderBtn.disabled = true; // Menonaktifkan tombol saat proses pengiriman

   // Simulasi proses pengiriman
   setTimeout(function() {
     loading.classList.add('hide'); // Menyembunyikan loading spinner
     placeOrderBtn.disabled = false; // Mengaktifkan kembali tombol

     // Mengambil jumlah total dari input jumlah
     const amount = parseFloat(amountInput.value);
     if (!isNaN(amount)) {
       // Tampilkan pemberitahuan pembayaran berhasil
       successNotification.textContent = 'Pembayaran Anda telah berhasil!';
       successNotification.style.display = 'block';

       // Reset form atau lakukan aksi lainnya setelah pembayaran berhasil

     } else {
       alert('Silakan masukkan jumlah total yang valid.');
     }
   }, 2000); // Menggunakan penundaan simulasi selama 2 detik
 });