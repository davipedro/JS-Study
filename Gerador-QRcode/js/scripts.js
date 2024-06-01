const container = document.querySelector(".container")
const qrCodeBtn = document.getElementById("btn-submit")

const qrCodeInput = document.querySelector("#qr-form input")

const qrCodeImg = document.querySelector("#qr-code img")

function generateQrCode(){
    
    const qrCodeInputValue = qrCodeInput.value;
    console.log(qrCodeInputValue);

    // valida se foi inserido algum input
    if (!qrCodeInputValue) return;

    // altera o texto do botão
    qrCodeBtn.innerText = "Gerando código..";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    // mostra o qr apenas quando tiver carregado, para não aparecer a imagem default
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active")
    })

    qrCodeBtn.innerText = "Código Gerado!";
}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode()
})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode();
    }
})

qrCodeInput.addEventListener("keyup", () => {
    
    if(!qrCodeInput.value){
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code"
    }
})