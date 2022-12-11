var qrcode = new QRCode(document.querySelector(".qrcode"));
function generateQr() {
  qrcode.makeCode(document.querySelector("input").value);
}