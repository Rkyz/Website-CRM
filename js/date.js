var text = document.querySelector('.tumbal-date');
var date = document.querySelector('.date');

date.addEventListener("change", e => {
  // Mengubah format tanggal menjadi objek Date
  var inputDate = new Date(date.value);
  
  // Memeriksa apakah tanggal yang dimasukkan valid
  if (isNaN(inputDate.getTime())) {
    // Jika tanggal tidak valid, tulis pesan kesalahan di .tumbal-date
    text.value = "Tanggal tidak valid";
  } else {
    // Jika tanggal valid, ubah format ke "tanggal bulan tahun"
    var options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    text.value = inputDate.toLocaleDateString('id-ID', options);
  }
});
