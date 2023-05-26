let listaCidades = [];
fetch('./cidades.json')
  .then((response) => response.json())
  .then(async (jsondata) => {
    listaCidades = jsondata;
    populateUF();
    return jsondata;
  });

const inputUF = document.getElementById('client_address_state');
const inputCidade = document.getElementById('client_address_city');


function populateUF() {
  listaCidades.forEach((estado) => {
    inputUF.options[inputUF.options.length] = new Option(estado.nome, estado.sigla);
  });
}


function filtrarCidades(value) {
  console.log('o value é :', value)
  if (value === '') {
    inputCidade.options.length = 1;
    return;
  }
  const estadoSelecionado = listaCidades.find((item) => item.sigla === value);
  const cidadesSelecionadas = estadoSelecionado.cidades;

  console.log('lista de cidade selecionada pela UF', cidadesSelecionadas)
  inputCidade.options.length = 1;
  cidadesSelecionadas.forEach((item) => {
    inputCidade.options[inputCidade.options.length] = new Option(item, item);
  });
}
