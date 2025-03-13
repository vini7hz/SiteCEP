let consult = document.getElementById("consultar");
consult.addEventListener("click", () => {
    let valor = document.getElementById('valor').value;

    fetch('https://viacep.com.br/ws/01001000/json/')
    .then(res => res.json())
    .then(dados => {
        console.log(dados);

        let resposta = document.getElementById('resposta');
        
        // Corrigido a parte que estava mal formatada
        resposta.innerHTML = 'Rua: ' + dados.logradouro + '<br>';
        resposta.innerHTML += 'Estado: ' + dados.uf + '<br>';
        resposta.innerHTML += 'Bairro: ' + dados.bairro + '<br>';

        // Criando um novo elemento de parágrafo para mostrar o logradouro
        let res = document.createElement('p');
        res.setAttribute('id', 'valor');
        res.setAttribute('class', 'paragraf');
        resposta.appendChild(res);
        res.textContent = 'Rua: ' + dados.logradouro;
        res.style.color = 'purple';
    });
});
