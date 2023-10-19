const imgBox = document.getElementById('imgBox');
const qrImage = document.getElementById('qrImage');
const input = document.getElementById('input');




function generateQr() {
    try{
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value;
    imgBox.classList.add('show-img')
    
    }
    catch{

    }
    input.value = '';
}

