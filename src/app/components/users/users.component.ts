import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('userForm') form: any;


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

    toggleHide(user: User) {
      user.hide = !user.hide;
    }
    onSubmit({value, valid}: {value: User, valid: boolean}) {
      if (!valid) {
        console.log('Form is not valid');
      } else {
        value.isActive = true;
        value.registered = new Date();
        value.hide = true;
        this.users.unshift(value);

        this.form.reset();
      }
    }

}
