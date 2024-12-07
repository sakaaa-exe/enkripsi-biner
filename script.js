// Fungsi untuk menampilkan pop-up
function showPopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");
  popup.style.display = "block";

  setTimeout(() => {
    popup.classList.add("hidden");
    popup.style.display = "none";
  }, 1500);
}

// Enkripsi teks menjadi angka biner
document.getElementById("encryptButton").addEventListener("click", function () {
  const text = document.getElementById("textInput").value;
  const binary = text
    .split("")
    .map(char => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join(" ");
  document.getElementById("binaryOutput").value = binary;
});

// Dekode angka biner menjadi teks
document.getElementById("decodeButton").addEventListener("click", function () {
  const binary = document.getElementById("binaryInput").value;
  const text = binary
    .split(" ")
    .map(bin => String.fromCharCode(parseInt(bin, 2)))
    .join("");
  document.getElementById("textOutput").value = text;
});

// Salin hasil enkripsi
document.getElementById("copyEncryptButton").addEventListener("click", function () {
  const binaryOutput = document.getElementById("binaryOutput");
  binaryOutput.select();
  document.execCommand("copy");
  showPopup();
});

// Salin hasil dekode
document.getElementById("copyDecodeButton").addEventListener("click", function () {
  const textOutput = document.getElementById("textOutput");
  textOutput.select();
  document.execCommand("copy");
  showPopup();
});
