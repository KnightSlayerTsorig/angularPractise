import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/users.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  email = false;
  phone = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  showUserEmail(): boolean {
    return this.email = !this.email;
  }

  showUserPhone(): boolean {
    return this.phone = !this.phone;
  }
}
