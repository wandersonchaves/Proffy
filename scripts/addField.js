// Procurar o botao
document.querySelector("#add-time").addEventListener("click", cloneField);
// Quando clicar no botao

// Executar uma acao
function cloneField() {
  console.log("Cheguei aqui");
  // Duplicar os campos
  const newFieldContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true);

  // Pegar os campos. Que campos?
  const fields = newFieldContainer.querySelectorAll("input");
  fields[0].value = "";
  fields[1].value = "";

  // Para cada campo, limpar
  fields.forEach(function (field) {
    // Pegar o field do momento e limpar ele
    field.value = "";
  });

  // Colocar na pagina: onde?
  document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
