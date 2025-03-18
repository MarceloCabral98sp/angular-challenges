import { Component } from '@angular/core';

@Component({
  selector: 'app-preco-produtos',
  templateUrl: './preco-produtos.component.html',
  styleUrl: './preco-produtos.component.css'
})
export class PrecoProdutosComponent {
  public products = [
    { name: 'notebook gamer', price: 5000, discount: 10 },
    { name: 'mouse sem fio', price: 150, discount: 5 },
    { name: 'teclado mecânico', price: 350, discount: 15 },
  ];
}
