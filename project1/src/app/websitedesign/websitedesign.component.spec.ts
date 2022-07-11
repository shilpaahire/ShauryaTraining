import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitedesignComponent } from './websitedesign.component';

describe('WebsitedesignComponent', () => {
  let component: WebsitedesignComponent;
  let fixture: ComponentFixture<WebsitedesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitedesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsitedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
