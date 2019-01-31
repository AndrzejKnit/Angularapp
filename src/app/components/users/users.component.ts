import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: User =  {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;


  constructor() { }

  ngOnInit() {


      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'jan@gmail.com',
          isActive: true,
          registered: new Date('01.02.2018 08:30:00'),
          hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Doe',
        email: 'kevin@gmail.com',
        isActive: true,
          registered: new Date('08.02.2018 09:30:00'),
          hide: true
    },
    {
      firstName: 'Anna',
      lastName: 'Joe',
      email: 'anna@gmail.com',
      isActive: false,
          registered: new Date('12.04.2018 12:30:00'),
          hide: true
  }
      ];
      this.loaded = true;
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   }
  // }
    toggleHide(user: User) {
      user.hide = !user.hide;
    }
    onSubmit(e) {
      console.log(123);
      e.preventDefault();
    }

}
