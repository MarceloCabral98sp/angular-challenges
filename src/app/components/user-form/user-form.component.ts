import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  public newUser: string = '';
  public responseData: any;

  constructor(private userService: UserService) {}

  onSubmit() {
    if(!this.newUser.trim()) return;

    this.userService.addData(this.newUser);

    this.newUser = '';
  }
}
