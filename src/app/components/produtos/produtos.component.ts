import { Component } from '@angular/core';

interface Eletrodomestico {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})

export class ProdutosComponent {

  public produtos: Eletrodomestico[] = [
    { "id": 3, "nome": "Geladeira" },
    { "id": 5, "nome": "Micro-ondas" },
    { "id": 1, "nome": "Aspirador de pó" },
    { "id": 4, "nome": "Liquidificador" },
    { "id": 2, "nome": "Fogão" }
  ]
}
