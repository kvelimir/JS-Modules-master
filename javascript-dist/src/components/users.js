import User from './user';
import {countItems, Gender} from '../services/utils';

const users = [{
        firstName: 'Velimir',
        lastName: 'Krstic',
        age: 29,
        gender: 0
    }
];

export default class Users {
    constructor() {}
    getUser(){
        let html='<ul>';
        users.forEach(user => {
            let item = new User(user.firstName, user.lastName, user.age, Gender[user.gender]);
        html += item.getUser();
        });
        html += '</ul>';
        console.log('Init users', countItems(users));
        return html;
    }
}