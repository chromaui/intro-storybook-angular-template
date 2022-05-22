import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-pure-task-list',
  templateUrl: './pure-task-list.component.html',
  styleUrls: ['./pure-task-list.component.css']
})
export class PureTaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * @ignore
   * Component property to define ordering of tasks
   */
   tasksInOrder: Task[] = [];

   /** Checks if it's in loading state */
   @Input() loading = false;
 
   /** Event to change the task to pinned */
   // tslint:disable-next-line: no-output-on-prefix
   @Output()
   onPinTask = new EventEmitter<Event>();
 
   /** Event to change the task to archived */
   // tslint:disable-next-line: no-output-on-prefix
   @Output()
   onArchiveTask = new EventEmitter<Event>();
 
   @Input()
   set tasks(arr: Task[]) {
     this.tasksInOrder = [
       ...arr.filter((t) => t.state === 'TASK_PINNED'),
       ...arr.filter((t) => t.state !== 'TASK_PINNED'),
     ];
   }
}
