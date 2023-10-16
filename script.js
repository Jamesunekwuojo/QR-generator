let QRbox = document.getElementById('QRbox')
let QRimage = document.getElementById('QRimg')
let QRtext = document.getElementById('QRtext')

function QRgenerator() {
    QRimage.src = "http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value;
    QRbox.classList.add("display-img")
    
}