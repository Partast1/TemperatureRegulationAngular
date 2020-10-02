import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleBHallComponent } from './middle-bhall.component';

describe('MiddleBHallComponent', () => {
  let component: MiddleBHallComponent;
  let fixture: ComponentFixture<MiddleBHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleBHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleBHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
