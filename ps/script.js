document.getElementById('order-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var checkIn = document.getElementById('check-in').value;
  var checkOut = document.getElementById('check-out').value;
  var roomType = document.getElementById('room-type').value;
  var specialRequest = document.getElementById('special-request').value;
  var cancellationPolicy = document.getElementById('cancellation-policy').value;
  var addOns = document.getElementById('add-ons').value;

  // Create room object
  var room = {
    name: name,
    email: email,
    checkIn: checkIn,
    checkOut: checkOut,
    roomType: roomType,
    specialRequest: specialRequest,
    cancellationPolicy: cancellationPolicy,
    addOns: addOns
  };

  // Display selected room in the side menu
  var selectedRooms = document.getElementById('selected-rooms');
  var roomItem = document.createElement('li');
  roomItem.textContent = room.roomType;
  selectedRooms.appendChild(roomItem);

  // Calculate and display price details
  var priceDetails = document.getElementById('price-details');
  priceDetails.innerHTML = `
    <h3>Price Details</h3>
    <p>Room Type: ${room.roomType}</p>
    <p>Check-in: ${room.checkIn}</p>
    <p>Check-out: ${room.checkOut}</p>
    <p>Special Request: ${room.specialRequest}</p>
    <p>Cancellation Policy: ${room.cancellationPolicy}</p>
    <p>Add-ons: ${room.addOns}</p>
  `;

  // Reset form
  document.getElementById('order-form').reset();
});

// Ambil referensi elemen yang dibutuhkan
const roomTypeSelect = document.getElementById("room-type");
const priceDetails = document.getElementById("price-details");

// Tambahkan event listener untuk mengupdate harga ketika tipe kamar berubah
roomTypeSelect.addEventListener("change", updatePrice);

// Fungsi untuk mengupdate harga berdasarkan tipe kamar yang dipilih
function updatePrice() {
  const roomType = roomTypeSelect.value;

  // Cek tipe kamar dan set harga yang sesuai
  let price = 0;
  if (roomType === "standard") {
    price = 100;
  } else if (roomType === "deluxe") {
    price = 150;
  } else if (roomType === "suite") {
    price = 200;
  }

  // Tampilkan harga di elemen priceDetails
  priceDetails.textContent = "Harga kamar per malam: $" + price;
}


