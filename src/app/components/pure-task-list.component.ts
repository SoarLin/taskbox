import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-pure-task-list',
  templateUrl: './pure-task-list.component.html',
  styleUrls: ['./pure-task-list.component.scss']
})
export class PureTaskListComponent implements OnInit {
  // @Input() tasks: Task[] = [];
  @Input() loading = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinTask = new EventEmitter<Event>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveTask = new EventEmitter<Event>();

  tasksInOrder: Task[] = [];
  @Input()
  set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter(t => t.state === 'TASK_PINNED'),
      ...arr.filter(t => t.state !== 'TASK_PINNED'),
    ];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
