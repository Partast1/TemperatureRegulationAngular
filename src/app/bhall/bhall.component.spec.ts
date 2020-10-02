import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhallComponent } from './bhall.component';

describe('BhallComponent', () => {
  let component: BhallComponent;
  let fixture: ComponentFixture<BhallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
