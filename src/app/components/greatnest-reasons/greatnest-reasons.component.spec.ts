import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatnestReasonsComponent } from './greatnest-reasons.component';

describe('GreatnestReasonsComponent', () => {
  let component: GreatnestReasonsComponent;
  let fixture: ComponentFixture<GreatnestReasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatnestReasonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatnestReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
