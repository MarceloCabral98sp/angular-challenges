import { ConfigService } from "../services/config.service";

export function configFactory(): ConfigService {
    const environment = 'development';

    let apiUrl = '';

    if(environment === 'development') {
        apiUrl = 'https://dev-api.example.com';
    } else {
        apiUrl = 'https://prod-api.example.com';
    }   

    return new ConfigService(apiUrl);
}