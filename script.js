function inputImc() {
    let nome = document.getElementById("input-nome").value;

    let peso = parseFloat(document.getElementById("input-peso").value);

    let altura = parseFloat(document.getElementById("input-altura").value);

    let output = document.querySelector(".output");

    //let imc = calcImc(peso, altura);
    //output.innerHTML = `<p>Nome: ${nome}</p>${imc}`;
    let imc = parseFloat(peso / (altura**2)).toFixed(2);

    output.innerHTML = `<p class="output-imc">${nome}, seu imc é <span>${imc}</span></p>`;  
    
    document.getElementById("output-formated").style = "display: flex; position: relative; text-align: center; color:#fff; font-size: large; top:-15.975em; left: 370px; background-color: #05975f; border-radius: 10px; width: 300px; height: 80px; box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;";

}
 
let form =  document.getElementById("imc-form");
form.addEventListener("submit", inputImc);




