var formHorasDiarias = document.getElementById('horasDiarias');
var formDiasDeTrabalho = document.getElementById('qtdDiasDeTrabalho');
var formDiasDeFerias = document.getElementById('diasDeFerias');
var formValorTotalDoProjeto = document.getElementById('valorTotal');
var divContent = document.getElementById('informacao');


var calcular = document.getElementById('btnCalcular');
calcular.addEventListener("click", calculaHoras);
function calculaHoras(){
    if (formHorasDiarias.value == "" || formDiasDeTrabalho.value == "" || formDiasDeFerias.value == "" || formValorTotalDoProjeto.value == ""){
        alert("Algum valor não foi passado!!");
    }else{
        var horasDiarias = Number(formHorasDiarias.value);
        var diasDeTrabalho = Number(formDiasDeTrabalho.value);
        var diasDeFerias = Number(formDiasDeFerias.value);
        var valorTotalDoProjeto = Number(formValorTotalDoProjeto.value);
        var resultado = document.getElementById('resultado');

        valorHora = (valorTotalDoProjeto / (diasDeTrabalho * 4 * horasDiarias) ) + ( ( diasDeFerias * diasDeTrabalho * horasDiarias ) );

        resultado.innerHTML = `<p>Valor por hora do projeto: R$ ${valorHora.toFixed(2)} </p>`
    }
}

function clearElement(element){
    element.innerHTML = "";
}

formHorasDiarias.addEventListener('focus', function(){
    clearElement(divContent);
    var newContent = document.createTextNode('Quando tratamos de freelances, há uma certa demanda do seu tempo em off. Ou seja: depois do trabalho, escola ou aquele tempinho vago no final do dia que você usa pra relaxar e descontrair. Esse tempo é algo muito valioso para qualquer pessoa, certo? Então claramente temos que levar esse fator em consideração.');
    divContent.appendChild(newContent);
    document.innerHTML = newContent;
})

formDiasDeTrabalho.addEventListener('focus', function(){
    clearElement(divContent);
    var newContent = document.createTextNode('Outro fator é a quantidade de dias efetivos que você irá disponibilizar para trabalhar no projeto. Não há nenhuma garantia que você poderá trabalhar todos os dias e de fato lidar com o processo de confirmar tudo com o cliente. Logo, você terá que cotar uma quantidade de dias específicos para lidar com todo o processo, sendo ele a parte comercial e desenvolvimento.');
    divContent.appendChild(newContent);
    document.innerHTML = newContent;
})

formDiasDeFerias.addEventListener('focus', function(){
    clearElement(divContent);
    var newContent = document.createTextNode('Qualquer modalidade de trabalho, seja CLT ou PJ, há seus encargos referentes à verba de férias e não seria diferente para lidar com um freela. Uma parte do valor da sua hora reflete diretamente na quantidade de dias que você deseja tirar "férias" com o valor total projeto.');
    divContent.appendChild(newContent);
    document.innerHTML = newContent;
})

formValorTotalDoProjeto.addEventListener('focus', function(){
    clearElement(divContent);
    var newContent = document.createTextNode('Não podemos esquecer do principal fator que é o total a ser recebido pelo freela. A partir desse valor, do quanto você desejaria ganhar em cima do trabalho, é feito o cálculo maior.');
    divContent.appendChild(newContent);
    document.innerHTML = newContent;
})




