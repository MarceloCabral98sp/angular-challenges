import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: number, 
  user: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private mockedData: User[] = [
    { id: 1, user: 'ana'},
    { id: 2, user: 'luiza'},
    { id: 3, user: 'pedro'},
    { id: 4, user: 'carlos'},
  ]

  private dataSubject = new BehaviorSubject<User[]>(this.mockedData);

  constructor() { }

  getData(): Observable<User[]> {
    return this.dataSubject.asObservable();
  }

  addData(newUser: string) {
    this.mockedData.push({
      id: this.mockedData.length + 1,
      user: newUser
    });
    
    this.dataSubject.next([...this.mockedData]);
  }
}
