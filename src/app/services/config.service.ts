import { Inject, Injectable } from '@angular/core';
import { API_URL_TOKEN } from '../config.token';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private apiUrl: string;

  constructor(@Inject(API_URL_TOKEN)apiUrl: string) { 
    this.apiUrl = apiUrl;
  }

  getConfig(): string {
    return this.apiUrl;
  }
}
