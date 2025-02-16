import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() titulo!: string;

  ngOnInit() {
    console.log('Componente inicializado!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges disparado');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit disparado');
  }

  ngOnDestroy() {
    console.log('Componente destruído');
  }
}
