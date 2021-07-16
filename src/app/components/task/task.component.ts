import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinTask = new EventEmitter<Event>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveTask = new EventEmitter<Event>();
  constructor() { }

  ngOnInit(): void {
  }

  onPin(id: any): void {
    this.onPinTask.emit(id);
  }

  onArchive(id: any): void {
    this.onArchiveTask.emit(id);
  }
}
