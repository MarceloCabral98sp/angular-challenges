import { Component } from '@angular/core';
import { ConfigService } from './services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  apiUrl: string;

  constructor(private configService: ConfigService) {
    this.apiUrl = this.configService.getConfig();
  }
}
