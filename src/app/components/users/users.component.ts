import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};

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
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: true,
          balance: 100,
          registered: new Date('01.02.2018 08:30:00')
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
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: true,
        balance: 200,
          registered: new Date('08.02.2018 09:30:00')
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
      image: 'http://lorempixel.com/600/600/people/1',
      isActive: false,
      balance: 300,
          registered: new Date('23.04.2018 12:30:00')
  }
      ];
      this.loaded = true;


//  this.addUser({
//       firstName: 'David',
//       lastName: 'Hey'
//   });
      this.setCurrentClasses();
      this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
    }
    setCurrentClasses() {
      this.currentClasses = {
        'btn-success': this.enableAdd,
        'big-text': this.showExtended
      };
    }
    setCurrentStyles() {
      this.currentStyles = {
        'padding-top': this.showExtended ? '0' : '40px',
        'font-size': this.showExtended ? '' : '40px'
      };
    }

}
