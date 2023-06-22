// Ambil referensi elemen yang dibutuhkan
const roomTypeSelect = document.getElementById("room-type");
const roomPriceElement = document.querySelector(".hotel-description .hotel-rating p");
const submitButton = document.querySelector(".submit");

// Tambahkan event listener untuk mengupdate harga dan aktivasi tombol saat tipe kamar dipilih
roomTypeSelect.addEventListener("change", updatePrice);
roomTypeSelect.addEventListener("change", enableSubmitButton);

// Fungsi untuk mengupdate harga berdasarkan tipe kamar yang dipilih
function updatePrice() {
  const selectedOption = roomTypeSelect.options[roomTypeSelect.selectedIndex];
  const price = selectedOption.getAttribute("data-price");

  roomPriceElement.textContent = '$'+`${price}/night`;
}

// Fungsi untuk mengaktifkan tombol saat tipe kamar dipilih
function enableSubmitButton() {
  const selectedOption = roomTypeSelect.options[roomTypeSelect.selectedIndex];
  const price = selectedOption.getAttribute("data-price");

  submitButton.href = `pesan.html?room=${selectedOption.value}&price=${price}`;
  submitButton.classList.remove("disabled");
}

// Cek jika terdapat parameter URL untuk tipe kamar dan harga
const urlParams = new URLSearchParams(window.location.search);
const roomParam = urlParams.get("room");
const priceParam = urlParams.get("price");

// Jika terdapat parameter, set tipe kamar dan harga default
if (roomParam && priceParam) {
  roomTypeSelect.value = roomParam;
  updatePrice();
  enableSubmitButton();
}
