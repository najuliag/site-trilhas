const pontoTuristico = document.getElementById("pontoTuristico");
const descricao = document.getElementById("descricao");
const pontoId = document.getElementById("pontoId");
const buscarButton = document.getElementById("buscar");

buscarButton.addEventListener("click", () => {
  const id = pontoId.value.trim();
  if (id) {
    const endpoint = `http://localhost:3000/atrativos/${id}`;

    fetch(endpoint)
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro na resposta da API');
        }
        return res.json();
      })
      .then(dados => {
        pontoTuristico.innerHTML = dados.nome || 'Cidade não encontrada';
        descricao.innerHTML = dados.descricao || 'Descrição não encontrada';
      })
      .catch(err => console.error('Erro ao carregar dados:', err));
  } else {
    pontoTuristico.innerHTML = 'ID não fornecido';
    descricao.innerHTML = '';
  }
});
