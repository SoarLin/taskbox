import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;
  let de: DebugElement;
  let elm: ElementRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Component Output EventEmitter', () => {
    it('task pined', () => {
      const task = { id: '1', title: 'Task 1', state: 'TASK_INBOX' };
      component.task = task;
      de = fixture.debugElement;
      elm = de.query(By.css('.actions a'));
      const spy = spyOn(component.onPinTask, 'emit');
      elm.nativeElement.click(task.id);
      expect(spy).toHaveBeenCalledWith(task.id);
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('task archived', () => {
      const task = { id: '2', title: 'Task 2', state: 'TASK_INBOX' };
      component.task = task;
      de = fixture.debugElement;
      elm = de.query(By.css('.checkbox-custom'));
      const spy = spyOn(component.onArchiveTask, 'emit');
      elm.nativeElement.click(task.id);
      expect(spy).toHaveBeenCalledWith(task.id);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
