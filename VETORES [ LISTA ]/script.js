let convidados = [];
function cadastrar(){
    let x = document.getElementById("name").value;
    let posicao = convidados.indexOf(x);
    if (posicao == -1){
    convidados.push (x);
    document.getElementById("lista").innerHTML = convidados;
} else {
    alert ("Esta pessoa já está cadastrado!");
}
}
function remove(){
    let x = document.getElementById("name").value;
    let posicao = convidados.indexOf(x);
    if (posicao == -1){
    alert ("Não foi encontrado este nome: " + x);
    } 
    else{
    convidados.splice(posicao, 1);
    document.getElementById("lista").innerHTML = convidados;
    }
}

 function edit(){
    let x = document.getElementById("name").value;

    for (let n = 0; n < convidados.length; n++ ){
        if (convidados[n] == x ){
            convidados[n] = prompt("Edite o nome cadastrado").toUpperCase();
            break 
        }

    }
    document.getElementById("lista").innerHTML = convidados;

 }

 //let x = document.getElementById("name").value;
    
 //for (let convidado of convidados) {
     //if (convidado == x) {
         //break;
         //continue;
     //}

     //alert(convidado);
 //}

 //convidados.forEach(convidado => {
     //alert(convidado)
 //});

 