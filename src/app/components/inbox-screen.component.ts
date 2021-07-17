import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { TasksState } from '../state/task.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inbox-screen',
  templateUrl: './inbox-screen.component.html',
  styleUrls: ['./inbox-screen.component.scss']
})
export class InboxScreenComponent {
  @Select(TasksState.getError) error$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
