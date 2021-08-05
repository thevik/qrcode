let qrcode = new QRCode(document.getElementById('output'));
let qrdata = document.getElementById('url');
let makeQr = document.getElementById('makeQR')

function generateQR() {
    var data = qrdata.value;
    qrcode.makeCode(data)
}

makeQr.addEventListener('click', function() {
    generateQR()
})