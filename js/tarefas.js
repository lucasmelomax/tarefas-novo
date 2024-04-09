export default class Tarefas {
  constructor() {
    this.tarefa = document.querySelector("form input");
    this.tarefas = document.querySelector(".tarefas-adicionadas");
    this.novaTarefa = {
      tarefa: "",
    };

    //bind
    this.valorTarefa = this.valorTarefa.bind(this);
  }

  criarTarefa() {
    const div = document.createElement("div");
    div.classList.add("js-tarefas");
    const div2 = document.createElement("div");
    div2.classList.add("js-nome-tarefas");
    div2.innerHTML = '<input type="checkbox">';
    const p = document.createElement("p");
    p.innerText = this.novaTarefa.tarefa;
    const div3 = document.createElement("div");
    div.classList.add("js-butao-tarefa");
    const butao1 = document.createElement("button");
    butao1.innerText = 'Feita';
    butao1.classList.add("feita");
    const butao2 = document.createElement("button");
    butao2.innerText = 'Editar';
    butao2.classList.add("editar");
    const butao3 = document.createElement("button");
    butao3.innerText = 'Cancelar';
    butao3.classList.add("cancelar");

    div.append(div2);
    div.append(div3);
    div2.append(p);
    div3.append(butao1);
    div3.append(butao2);
    div3.append(butao3);
    this.tarefas.append(div)
  }

  valorTarefa(event) {
    event.preventDefault();
    console.log(event)
    this.novaTarefa.tarefa = this.tarefa.value;
    this.criarTarefa();
  }

  addEvents() {
    this.tarefa.addEventListener("change", this.valorTarefa);
  }

  init() {
    this.addEvents();
  }
}
