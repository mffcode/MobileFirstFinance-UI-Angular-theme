import { Injectable } from '@angular/core';
import { Task } from './taskboard.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class TaskBoardService {
    private headers = new Headers({ 'content-type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    private baseUrl = "http://localhost:6061/mff/api/get";
    private baseUrls = "http://localhost:6061/mff/api/create";
    constructor(private _http: Http) { }
    getWorkflows() {
        return this._http.get(this.baseUrl,this.options).
          map((response: Response) => response.json());
      }
      getTodoByID(todoID) {
        return this._http.get(this.baseUrl+'/'+todoID,this.options).
          map((response: Response) => response.json());
      }
    createTodo(todo){
       // alert(todo)
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.baseUrls,todo,options).
        map((response: Response) => response.text());
    }
    creaupdateTodoteTodo(todoID,todo){
       // alert(todo)
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.baseUrls+'/'+todoID,todo,options).
        map((response: Response) => response.text());
    }
    public todo: Task[] = [
        // new Task(
        //     'Responsive',
        //     'Etiam porta sem malesuada magna mollis euismod.',
        //     'May 17',
        //     'Elizabeth Elliott',
        //     'assets/img/portrait/small/avatar-s-3.png',
        //     'New'),
        // new Task(
        //     'QA Testing',
        //     'Etiam porta sem malesuada magna mollis euismod.',
        //     'May 17',
        //     'Elizabeth Elliott',
        //     'assets/img/portrait/small/avatar-s-3.png',
        //     'New'),
        // new Task(
        //     'Budget',
        //     'Etiam porta sem malesuada magna mollis euismod.',
        //     'May 17',
        //     'Elizabeth Elliott',
        //     'assets/img/portrait/small/avatar-s-3.png',
        //     'New')
    ];

    public inProcess: Task[] = [
    //     new Task(
    //         'checklist',
    //         'Etiam porta sem malesuada magna mollis euismod.',
    //         'Apr 11',
    //         'Bruce Reid',
    //         'assets/img/portrait/small/avatar-s-1.png',
    //         'In Process'),
    //     new Task(
    //         'Navigation',
    //         'Etiam porta sem malesuada magna mollis euismod.',
    //         'Apr 11',
    //         'Bruce Reid',
    //         'assets/img/portrait/small/avatar-s-1.png',
    //         'In Process'),
    //     new Task(
    //         'Bootstrap 4',
    //         'Etiam porta sem malesuada magna mollis euismod.',
    //         'Apr 11',
    //         'Bruce Reid',
    //         'assets/img/portrait/small/avatar-s-1.png',
    //         'In Process')
    ];

    public backLog: Task[] = [
        // new Task(
        //     'Assessment',
        //     'Etiam porta sem malesuada magna mollis euismod.',
        //     'Jun 19',
        //     'Kelly Reyes',
        //     'assets/img/portrait/small/avatar-s-5.png',
        //     'Pending'),
        // new Task(
        //     'Schedule',
        //     'Etiam porta sem malesuada magna mollis euismod.',
        //     'Jun 19',
        //     'Kelly Reyes',
        //     'assets/img/portrait/small/avatar-s-5.png',
        //     'Pending'),
        // new Task(
        //     'Unit tests',
        //     'Etiam porta sem malesuada magna mollis euismod.',
        //     'Jun 19',
        //     'Kelly Reyes',
        //     'assets/img/portrait/small/avatar-s-5.png',
        //     'Pending')
    ];

    public completed: Task[] = [
        // new Task(
        //     'Angular 5',
        //     'Etiam porta sem malesuada magna mollis euismod.',
        //     'Aug 22',
        //     'Sara Ali',
        //     'assets/img/portrait/small/avatar-s-7.png',
        //     'Completed'),
        // new Task(
        //     'Fields',
        //     'Etiam porta sem malesuada magna mollis euismod.',
        //     'Aug 22',
        //     'Sara Ali',
        //     'assets/img/portrait/small/avatar-s-7.png',
        //     'Completed'),
        // new Task(
        //     'Task board',
        //     'Etiam porta sem malesuada magna mollis euismod.',
        //     'Aug 22',
        //     'Sara Ali',
        //     'assets/img/portrait/small/avatar-s-7.png',
        //     'Completed')
    ];
    
    addNewTask(id:number,title: string, message: string,createdOn: string, createdBy: string, assignedTo: string, status: string) {
        this.todo.push(new Task(
            id,
            title,
            message,
            createdOn,
            createdBy,
            assignedTo,
            status
        ))
       
    }

    // gettodo() {
    //     return this.todo;
    //   }
}