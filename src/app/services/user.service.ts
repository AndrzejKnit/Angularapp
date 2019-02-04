import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

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

   getData() {
     this.data = new Observable(observer => {
       setTimeout(() => {
         observer.next(1);
       }, 1000);

       setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);

      setTimeout(() => {
        observer.next(5);
      }, 5000);
     });

     return this.data;
   }


   getUsers(): Observable<User[]> {
    // console.log('Fetching users from service...');
    return of (this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
