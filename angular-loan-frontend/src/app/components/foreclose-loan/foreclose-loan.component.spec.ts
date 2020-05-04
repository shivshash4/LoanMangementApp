import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecloseLoanComponent } from './foreclose-loan.component';

describe('ForecloseLoanComponent', () => {
  let component: ForecloseLoanComponent;
  let fixture: ComponentFixture<ForecloseLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecloseLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecloseLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
