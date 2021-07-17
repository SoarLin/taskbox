import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureInboxScreenComponent } from './pure-inbox-screen.component';
import { TaskListComponent } from './task-list.component';

xdescribe('PureInboxScreenComponent', () => {
  let component: PureInboxScreenComponent;
  let fixture: ComponentFixture<PureInboxScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureInboxScreenComponent, TaskListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PureInboxScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
