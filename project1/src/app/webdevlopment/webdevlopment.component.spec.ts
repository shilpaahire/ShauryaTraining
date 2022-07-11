import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevlopmentComponent } from './webdevlopment.component';

describe('WebdevlopmentComponent', () => {
  let component: WebdevlopmentComponent;
  let fixture: ComponentFixture<WebdevlopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebdevlopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebdevlopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
