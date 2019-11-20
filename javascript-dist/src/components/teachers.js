import Teacher from './teacher';
import {countItems, Gender} from '../services/utils';

const teachers = [{
        firstName: 'Prvi',
        lastName: 'Teacher',
        age: 29,
        gender: 0,
        yearsOfTenure: 1
    },
    {
        firstName: 'Drugi',
        lastName: 'Teacher',
        age: 28,
        gender: 1,
        yearsOfTenure: 2
    }
];

export default class Teachers {
    constructor() {}
    getTeacher(){
        let html='<ul>';
        teachers.forEach(teacher => {
            let item = new Teacher(teacher.firstName, teacher.lastName, teacher.age, Gender[teacher.gender], teacher.yearsOfTenure);
        html += item.getTeacher();
        });
        html += '</ul>';
        console.log('Init teachers', countItems(teachers));
        return html;
    }
}