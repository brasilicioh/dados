function configSom(id) {
    if (id == "configurar") {
        document.getElementById("body").style.display = "none";
        document.getElementById("configuraSom").style.display = "";
    } else if (id == "voltar") {
        document.getElementById("body").style.display = "";
        document.getElementById("configuraSom").style.display = "none";
    }
}

function tocarSom(nomeSom) {
    document.getElementById("tocarOSom").innerHTML = `<audio id="audio" src="sons/${nomeSom}"</audio>`;
    document.getElementById("audio").play();
}

function definirSom(nomeSom) {
    document.getElementById("tocarOSomDado").innerHTML = `<audio id="audioDado" src="sons/${nomeSom}"</audio>`;
}