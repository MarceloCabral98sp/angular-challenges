import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selecao-produto',
  templateUrl: './selecao-produto.component.html',
  styleUrl: './selecao-produto.component.css'
})
export class SelecaoProdutoComponent {

  @Input()
  listaProdutos!: { id: number, nome: string, marca: string}[];

  @Output()
  produtoId = new EventEmitter<number>();

  onSelecionar(id: number) {
    this.produtoId.emit(id);
  }
}
