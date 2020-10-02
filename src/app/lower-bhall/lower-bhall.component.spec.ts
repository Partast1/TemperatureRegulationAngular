import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerBHallComponent } from './lower-bhall.component';

describe('LowerBHallComponent', () => {
  let component: LowerBHallComponent;
  let fixture: ComponentFixture<LowerBHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerBHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowerBHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
