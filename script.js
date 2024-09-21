function zenitPolar(palavra) {
    const mapa = {
        "Z":"P","P":"Z",
        "E":"O","O":"E",
        "N":"L","L":"N",
        "I":"A","A":"I",
        "T":"R","R":"T",

        "z":"p","p":"z",
        "e":"o","o":"e",
        "n":"l","l":"n",
        "i":"a","a":"i",
        "t":"r","r":"t",
    }
    var string = String(document.getElementById("entrada").value);
    // return string.replace(/[zenitpolar]/gi, (letra) => mapa[letra] || letra);
    let stringTraduzida = string.replace(/[ZENITPOLARzenitpolar]/gi, (letra) => mapa[letra] || letra);
    document.getElementById("saida").innerHTML = stringTraduzida;
    //testando o programa
    // let stringModificada = zenitPolar(string);
    // console.log(stringModificada)
}
