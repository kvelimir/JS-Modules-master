import Students from '../components/students'
import Teachers from '../components/teachers'
import Users from '../components/users'
class Content{
    constructor(){}
    getHtml(){
        const students = new Students();
        const teachers = new Teachers();
        const users = new Users();
        let html = '<div>';
        html += users.getUser();
        html += students.getStudents();
        html += teachers.getTeacher();
        html +='</div>';
        console.log('Init content');
        return html;
    }
}
export default Content;
