import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TasksState } from 'src/app/state/task.state';

@Component({
  selector: 'app-inbox-screen',
  templateUrl: './inbox-screen.component.html',
  styleUrls: ['./inbox-screen.component.css']
})
export class InboxScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Select(TasksState.getError) error$: Observable<any>;
}
