import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment3detComponent } from './assignment3det.component';

describe('Assignment3detComponent', () => {
  let component: Assignment3detComponent;
  let fixture: ComponentFixture<Assignment3detComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment3detComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment3detComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
