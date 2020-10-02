import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowestBHallComponent } from './lowest-bhall.component';

describe('LowestBHallComponent', () => {
  let component: LowestBHallComponent;
  let fixture: ComponentFixture<LowestBHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowestBHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowestBHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
