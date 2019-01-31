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
    age: null,
    address: {
      street: '',
      city: '',
      state: '',
    }
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
          age: 30,
          address: {
              street: '50 Main st',
              city: 'Boston',
              state: 'MA'
          },
          isActive: true,
          registered: new Date('01.02.2018 08:30:00'),
          hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Doe',
        age: 34,
        address: {
            street: '90 Main st',
            city: 'Boston',
            state: 'MA'
        },
        isActive: true,
          registered: new Date('08.02.2018 09:30:00'),
          hide: true
    },
    {
      firstName: 'Anna',
      lastName: 'Joe',
      age: 56,
      address: {
          street: '12 Main st',
          city: 'Boston',
          state: 'MA'
      },
      isActive: false,
          registered: new Date('12.04.2018 12:30:00'),
          hide: true
  }
      ];
      this.loaded = true;
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
    }
    }
  }
    toggleHide(user: User) {
      user.hide = !user.hide;
    }
    onSubmit(e) {
      console.log(123);
      e.preventDefault();
    }

    fireEvent(e) {
      console.log(e.type);
      console.log(e.target.value);
    }
}
