import {Component} from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']

})

export class UserComponent {
    // Properties
    firstName: string;
    lastName: string;
    age: number;
    address;

    foo: any;
    hasKidds: boolean;
    numberArry: number[];
    stringArray: string[];
    mixedArray: any[];
    myTuple: [string, number, any];
    unusable: void;
    u: undefined;
    n: null;


    // Methods
    constructor() {
        this.firstName = 'John';
        this.lastName = 'Doe';
        this.age = 30;

    this.address = {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
    }

    this.foo = true;
    this.hasKidds = true;
    this.numberArry = [1,2,3,5];
    this.stringArray = ['a','b','c'];
    this.mixedArray = [1,2,'sdfsd'];
    this.myTuple = ['hello',1, 2];
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;
    console.log(this.addNumbers(2, 3));
}
showAge() {
        return this.age + 2;
    }

    addNumbers(num1: number, num2: number): number {
        return num1 + num2;
    }
}