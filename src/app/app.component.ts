import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  public initialValue: number = 15;

  onValueEmitted(number: number) {
    this.initialValue = number;
  }
}
