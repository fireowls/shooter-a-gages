import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GageComponent } from './gage.component';

describe('GageComponent', () => {
  let component: GageComponent;
  let fixture: ComponentFixture<GageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
