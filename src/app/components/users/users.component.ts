import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];

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
        }
    },
    {
      firstName: 'Kevin',
      lastName: 'Doe',
      age: 34,
      address: {
          street: '90 Main st',
          city: 'Boston',
          state: 'MA'
      }
  },
  {
    firstName: 'Anna',
    lastName: 'Joe',
    age: 56,
    address: {
        street: '12 Main st',
        city: 'Boston',
        state: 'MA'
    }
}
    ];
    this.addUser({
      firstName: 'David',
      lastName: 'Hey',
      age: 56,
      address: {
          street: '12 Main st',
          city: 'Boston',
          state: 'MA'
      }
  });
  }

  addUser(user: User) {
    this.users.push(user);
    }

}
