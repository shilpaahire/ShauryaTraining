import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahaminingComponent } from './mahamining.component';

describe('MahaminingComponent', () => {
  let component: MahaminingComponent;
  let fixture: ComponentFixture<MahaminingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahaminingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MahaminingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
