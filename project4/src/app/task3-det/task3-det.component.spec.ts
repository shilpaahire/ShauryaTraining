import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3DetComponent } from './task3-det.component';

describe('Task3DetComponent', () => {
  let component: Task3DetComponent;
  let fixture: ComponentFixture<Task3DetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Task3DetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task3DetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
