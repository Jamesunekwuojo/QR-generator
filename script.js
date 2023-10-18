let QRbox = document.getElementById('QRbox')
let QRimage = document.getElementById('QRimg')
let QRtext = document.getElementById('QRtext')

function QRgenerator() {
    if(QRtext.value.length > 0){
        QRimage.src = "http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value;
        QRbox.classList.add("display-img")

    }else{
        QRtext.classList.add('error');
        setTimeout(()=>{
            QRtext.classList.remove('error')
        }, 1000)
    }
    
    
}
