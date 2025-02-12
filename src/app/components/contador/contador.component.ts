import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent implements OnInit {

  @Input() initialValue!: number;

  @Output()
  newValue = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onIncrement() {
    this.initialValue = this.initialValue + 1;
    this.newValue.emit(this.initialValue);
  }

  onDecrement() {
    this.initialValue = this.initialValue - 1;
    this.newValue.emit(this.initialValue);
  }
}
