import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecoProdutosComponent } from './preco-produtos.component';

describe('PrecoProdutosComponent', () => {
  let component: PrecoProdutosComponent;
  let fixture: ComponentFixture<PrecoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrecoProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
