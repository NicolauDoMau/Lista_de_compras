let titulo = window.document.getElementById("titulo")
let textEntrada = document.querySelector("#entrada")
let lista = document.querySelector("#lista")

titulo.innerHTML = "GERENCIADOR DE TAREFAS"

document.getElementById("btnAdicionar").addEventListener("click", function () {
  if (textEntrada.value.trim() !== "") {
    let li = document.createElement("li")
    let texto = document.createElement("span")
    texto.innerText = textEntrada.value

    
    texto.addEventListener("click", function () {
      li.classList.toggle("concluida")
    })

    let btnRemover = document.createElement("span")
    btnRemover.innerHTML = "X"
    btnRemover.classList.add("btnRemover")
    btnRemover.addEventListener("click", (event) => {
      event.stopPropagation();
      li.remove();
    })

    li.appendChild(texto)
    li.appendChild(btnRemover)
    lista.appendChild(li)

    textEntrada.value = ""
  } else {
    alert("Por favor, insira um item válido.")
  }
})

document.getElementById("btnLimpar").addEventListener("click", function () {
  if (window.confirm("Tem certeza que deseja limpar a lista?")) {
    while (lista.firstChild) {
      lista.removeChild(lista.firstChild);
    }
  }
})
function mostrarStatusLista() {
  const itens = lista.getElementsByTagName("li");
  let total = itens.length;
  let comprados = 0;
  let faltam = 0;
  let nomesComprados = [];
  let nomesFaltam = [];
  for (let item of itens) {
    if (item.classList.contains("concluida")) {
      comprados++;
      nomesComprados.push(item.childNodes[0].nodeValue.trim());
    } else {
      faltam++;
      nomesFaltam.push(item.childNodes[0].nodeValue.trim());
    }
  }
  alert(
    `Total de itens: ${total}\n` +
    `Itens que faltam comprar: ${nomesFaltam.join(", ")}\n` +
    `Itens já comprados:  ${nomesComprados.join(", ")}`
  );
}
document.getElementById("btnStatus")?.addEventListener("click", function () {
  const itens = lista.getElementsByTagName("li");
  let total = itens.length;
  let comprados = 0;
  let faltam = 0;
  let nomesComprados = [];
  let nomesFaltam = [];
  for (let item of itens) {
    let textoSpan = item.querySelector('span');
    let nome = textoSpan ? textoSpan.innerText.trim() : '';
    if (item.classList.contains("concluida")) {
      comprados++;
      nomesComprados.push(nome);
    } else {
      faltam++;
      nomesFaltam.push(nome);
    }
  }
  alert(
    `Total de itens: ${total}\n` +
    `Tarefas a concluir: ${nomesFaltam.join(", ")}\n` +
    `Tarefas já concluidas:  ${nomesComprados.join(", ")}`
  );
});
