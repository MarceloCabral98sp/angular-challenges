import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public initialValue: number = 15;

  public listaTarefas = [
    { id: 1, tarefa: 'Comprar mantimentos' },
    { id: 2, tarefa: 'Estudar para a prova' },
    { id: 3, tarefa: 'Fazer a limpeza da casa' },
    { id: 4, tarefa: 'Pagar contas' },
    { id: 5, tarefa: 'Ligar para o médico' },
  ];

  public dadosForm = {
    nome: 'José Fernandes Toledo',
    email: 'jose.toledo@gmail.com',
  };

  public listaProdutos = [
    { id: 1, nome: 'Geladeira', marca: 'Brastemp' },
    { id: 2, nome: 'Micro-ondas', marca: 'LG' },
    { id: 3, nome: 'Máquina de lavar', marca: 'Samsung' },
    { id: 4, nome: 'Fogão', marca: 'Electrolux' },
    { id: 5, nome: 'Aspirador de pó', marca: 'Philco' },
  ];

  onValueEmitted(number: number) {
    this.initialValue = number;
  }

  onTarefaConcluida(id: number) {
    const tarefa = this.listaTarefas.find((tarefa) => tarefa.id === id);

    if (tarefa) {
      alert(`A tarefa "${tarefa.tarefa}" foi concluída`);
    }
  }

  onNewForm(form: { nome: string; email: string }) {
    this.dadosForm = form;
    console.log(this.dadosForm);
  }

  onProdutoSelecionado(id: number) {
    const produto = this.listaProdutos.find((produto) => produto.id === id);

    if(produto) {
      alert(`A tarefa "${produto.nome}" foi selecionado`);
    }
  }
}
