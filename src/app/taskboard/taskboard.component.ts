import { Component, ViewEncapsulation, ViewChild, ElementRef,OnInit } from '@angular/core';
import { TaskBoardService } from './taskboard.service';
import { Task } from './taskboard.model';
import { NgForm } from '@angular/forms';
//import { join } from 'path';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { Router, ActivatedRoute } from '@angular/router';
import { value } from 'app/shared/data/dropdowns';



@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss'],
  providers: [TaskBoardService],
  encapsulation: ViewEncapsulation.None
})
export class TaskboardComponent implements OnInit {
  @ViewChild('login') loginForm: NgForm;

  @ViewChild('todoID') idInputRef: ElementRef;
  @ViewChild('todoTitle') titleInputRef: ElementRef;
  @ViewChild('todoMessage') messageInputRef: ElementRef;
  @ViewChild('todoCreatedOn') createdOnInputRef: ElementRef;
  @ViewChild('todoCreatedBy') createdByInputRef: ElementRef;
  @ViewChild('todoAssignedTo') assignedToInputRef: ElementRef;
  @ViewChild('todoStatus') statusInputRef: ElementRef;
  
  public todo:Task[];
  public inProcess:Task[];
  public backLog:Task[];
  public completed:Task[];
  msg = '';

   constructor(private elRef: ElementRef, private taskBoardService: TaskBoardService,
    private _router:Router,private dragulaService:DragulaService) {
    this.taskBoardService.getWorkflows().subscribe(data=>{
    data.forEach(element => {
     // alert(JSON.stringify(element))
     if(element.status=='new'){
      this.todo.push(new Task(element.todoID,element.title,element.message,element.createdOn,
        element.createdBy,element.assignedTo,element.status))
     }else if(element.status=='In Process'){
       this.inProcess.push(new Task(element.todoID,element.title,element.message,element.createdOn,
        element.createdBy,element.assignedTo,element.status))
     }else if(element.status=='Completed'){
       this.completed.push(new Task(element.todoID,element.title,element.message,element.createdOn,
        element.createdBy,element.assignedTo,element.status))
    }else if(element.status=='Pending'){
      this.backLog.push(new Task(element.todoID,element.title,element.message,element.createdOn,
        element.createdBy,element.assignedTo,element.status))
    }
     
    });
    })
    this.todo = taskBoardService.todo;
    this.inProcess = taskBoardService.inProcess;
    this.backLog = taskBoardService.backLog;
    this.completed = taskBoardService.completed;

    this.dragulaService.dropModel.subscribe(value=>{
     // alert(value[2].id)
      if(value[2].id=='todo'){
        this.taskBoardService.getTodoByID(value[2].id).subscribe(data=>{
          alert()
       })
      }else if(value[2].id=='inProcess'){
        this.taskBoardService.getTodoByID(value[2].id).subscribe(data=>{
          alert("hello")
       })
      }
      else if(value[2].id=='completed'){
        this.taskBoardService.getTodoByID(value[2].id).subscribe(data=>{
          alert("hello")
        })
      }else if(value[2].id=='backlog'){
        alert("hello4")
        this.taskBoardService.getTodoByID(value[2].id).subscribe(data=>{
         
        })
      }
      
    });
  }
  ngOnInit() {
  

  }
  
  // drop(event:any){
  // alert(event)
  // }
  onAddTask() {
    if (this.messageInputRef.nativeElement.value != "" && this.titleInputRef.nativeElement.value != "") {
      this.taskBoardService.addNewTask(this.titleInputRef.nativeElement.value,this.titleInputRef.nativeElement.value, this.messageInputRef.nativeElement.value,
        this.messageInputRef.nativeElement.value,this.messageInputRef.nativeElement.value,
        this.messageInputRef.nativeElement.value,this.messageInputRef.nativeElement.value);
     // this.todo = this.taskBoardService.gettodo();
    }
    this.titleInputRef.nativeElement.value = "";
    this.messageInputRef.nativeElement.value = "";
    this.createdOnInputRef.nativeElement.value = "";
    this.createdByInputRef.nativeElement.value = "";
    this.assignedToInputRef.nativeElement.value = "";
    this.statusInputRef.nativeElement.value = "";
    this.titleInputRef.nativeElement.focus();
  }
onSubmit(users: any) {
 // alert(JSON.stringify(users))
  this.taskBoardService.createTodo(JSON.stringify(users)).subscribe(data=>{
    location.reload();
  })
}

}
