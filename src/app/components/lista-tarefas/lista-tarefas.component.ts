import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css',
})
export class ListaTarefasComponent {
  @Input()
  listaTarefas: { id: number; tarefa: string }[] = [];

  @Output()
  tarefaConcluida = new EventEmitter<number>();

  onConcluir(id: number) {
    this.tarefaConcluida.emit(id);
  }
}
