

function encriptar(){
    var texto = document.getElementById("textoingresado").value.toLowerCase();
    var txtCifrado = texto.replace(/e/i,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    //esta función es para que desaparezca luego de cifrar//
    document.getElementById("imagenderecha").style.display = "none";
    document.getElementById("textoej").style.display = "none";

    //esto es para que devuelva el texto cifrado
    document.getElementById("textoej2").innerHTML = txtCifrado;
    document.getElementById("bcopiar").style.display = "show";
    document.getElementById("bcopiar").style.display = "inherit";
}   



function desencriptar(){
    var texto = document.getElementById("textoingresado").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    //esta función es para que desaparezca luego de cifrar//
    document.getElementById("imagenderecha").style.display = "none";
    document.getElementById("textoej").style.display = "none";

    //esto es para que devuelva el texto cifrado
    document.getElementById("textoej2").innerHTML = txtCifrado;
    document.getElementById("bcopiar").style.display = "show";
    document.getElementById("bcopiar").style.display = "inherit";
}   


function copiar(){
    var contenido = document.querySelector("#textoej2");
    contenido.select();
    document.execCommand("copy");
}