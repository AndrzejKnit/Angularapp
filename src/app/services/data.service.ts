import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() {

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

   }
   getUsers(): User[] {
     console.log('Fetching users from service...');
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
