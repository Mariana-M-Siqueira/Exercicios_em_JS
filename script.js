/*EXERCÍCIO 01:*/
function verificar01(){
    const n1 = parseFloat(document.getElementById("ativ01-n1").value);
    const n2 = parseFloat(document.getElementById("ativ01-n2").value);

    if(n1 == n2){
        document.getElementById("ativ01-label3").innerHTML = "Os valores são iguais!"
    }
    else if(n1 > n2){
        document.getElementById("ativ01-label3").innerHTML = `O n° ${n1} é maior que o n° ${n2}!`
    }
    else if(n2 > n1){
        document.getElementById("ativ01-label3").innerHTML = `${n2} é maior que ${n1}!`
    }
}

/*EXERCÍCIO 02:*/
function verificar02(){
    const ano = parseInt(document.getElementById("ativ02-n1").value);

    if((ano <= 2007 && ano >= 2006) || ano < 1959){
        document.getElementById("ativ02-label").innerHTML = "Seu voto é facultativo!"
    }
    else if(ano >= 2008){
        document.getElementById("ativ02-label").innerHTML = "Você não pode votar!"
    }
    else if(ano <= 2005){
        document.getElementById("ativ02-label").innerHTML = "Seu voto é obrigatório!"
    }
}

/*EXERCÍCIO 03:*/
const modal = document.getElementById("modal");
const buttonclose = document.getElementById("btn-close");

function verificar03(){
    const senha = document.getElementById("ativ03-n2").value;
    const email = document.getElementById("ativ03-n1").value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if((senha == 1234) && (regex.test(email))){
        document.getElementById("ativ-result").innerHTML = "Acesso Permitido!"
    }
    else if((senha == 1234) || (regex.test(email))){
        document.getElementById("ativ-result").innerHTML = "E-mail ou Senha Incorreto.<br>Digite Novamente!"
    }            
    else{
        document.getElementById("ativ-result").innerHTML = "Acesso Negado!"
    }

    modal.showModal()
}

buttonclose.onclick = function(){
    modal.close()
}

/*EXERCÍCIO 04:*/
function verificar04(){

    const qt = parseInt(document.getElementById("ativ04-n1").value);

        if (qt < 12){
            let calc = (0.30 * qt);
            document.getElementById("ativ04-label2").innerHTML = "Levando "+qt+" Maçãs, você pagará R$"+calc.toFixed(2);
        }
        else if(qt >= 12){
            let calc = (0.25 * qt);
            document.getElementById("ativ04-label2").innerHTML = "Levando "+qt+" Maçãs, você pagará R$"+calc.toFixed(2);
        }
}

/*EXERCÍCIO 05:*/

function verificar05(){
    let n1 = parseInt(document.getElementById("ativ05-n1").value);
    let n2 = parseInt(document.getElementById("ativ05-n2").value);
    let n3 = parseInt(document.getElementById("ativ05-n3").value);
                
    if(n1 > n2){
        let aux = n1;
        n1 = n2;
        n2 = aux;
    }
    if(n1 > n3){
        let aux = n1;
        n1 = n3;
        n3 = aux;
    }
    if(n2 > n3){
        let aux = n2;
        n2 = n3;
        n3 = aux;
    }
    document.getElementById("ativ05-result").innerHTML = `Ordem Crescente: ${n1} ${n2} ${n3}`;
}

/*EXERCÍCIO 06:*/

function verificar06(){
    const gen = parseInt(document.getElementById("ativ06-n1").value);
    const altura = parseFloat(document.getElementById("ativ06-n2").value);
                
    if (gen == 1){
        ideal = (62.1 * altura) - 44.7;
        document.getElementById("ativ06-result").innerHTML = `Seu peso ideal é de ${ideal.toFixed(2)}Kg.`;
    }else if (gen == 2){
        ideal = (72.7 * altura) - 58;
        document.getElementById("ativ06-result").innerHTML = `Seu peso ideal é de ${ideal.toFixed(2)}Kg.`;
    }else{
        document.getElementById("ativ06-result").innerHTML = "Digite novamente<br>1 - Feminino e 2 - Masculino.";
    }
}

/*EXERCÍCIO 07:*/

function verificar07(){
    const n1 = parseInt(document.getElementById("ativ07-n1").value);
    const n2 = parseInt(document.getElementById("ativ07-n2").value);
    const n3 = parseInt(document.getElementById("ativ07-n3").value);
                
    if (n1 > n2 && (n1 > n3))
    {
        document.getElementById("ativ07-result").innerHTML = `Número ${n1} é maior que<br>os números ${n2} e ${n3}`;
    }
    else if (n2 > n3 && (n2 > n3))
    {
        document.getElementById("ativ07-result").innerHTML = `Número ${n2} é maior que<br>os números ${n1} e ${n3}`;
    }
    else if (n3 > n1 && (n3 > n2))
    {
        document.getElementById("ativ07-result").innerHTML = `Número ${n3} é maior que<br>os números ${n2} e ${n1}`;
    }
    else 
    {
        document.getElementById("ativ07-result").innerHTML = "Todos os valores são iguais.";
    }
}

/*EXERCÍCIO 08:*/

function verificar08(){
        const n1 = parseFloat(document.getElementById("ativ08-n1").value);
        const n2 = parseFloat(document.getElementById("ativ08-n2").value);
        const n3 = parseFloat(document.getElementById("ativ08-n3").value);
                    
        if (n1 != n2 && (n1 != n3) && (n2 != n3))
        {
            document.getElementById("ativ08-result").innerHTML = "É um Triângulo Escaleno, pois<br>possui todos os lados diferentes!";
        }
        else if (n1 == n3 && (n1 == n2) && (n2 == n3))
        {
            document.getElementById("ativ08-result").innerHTML = "É um Triângulo Equilátero, pois<br>possui todos os lados iguais!";
        }
        else if (n1 == n3 || (n1 == n2) || (n2 == n3))
        {
            document.getElementById("ativ08-result").innerHTML = "É um Triângulo Isósceles, pois<br>possui dois lados iguais!";
        }
    }