import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperBHallComponent } from './upper-bhall.component';

describe('UpperBHallComponent', () => {
  let component: UpperBHallComponent;
  let fixture: ComponentFixture<UpperBHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperBHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperBHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
