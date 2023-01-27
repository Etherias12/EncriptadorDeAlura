const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


function encriptar(strigEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    strigEncriptado = strigEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(strigEncriptado.includes(matrizCodigo[i][0])){
            strigEncriptado = strigEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return strigEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(strigDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    strigDesencriptado = strigDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(strigDesencriptado.includes(matrizCodigo[i][0])){
            strigDesencriptado = strigDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return strigDesencriptado
}

function copiarTexto(){
    let button = document.querySelector(".btn-copiar")

    navigator.clipboard.writeText(mensaje.value)
    button.textContent = "Copiado"
}

