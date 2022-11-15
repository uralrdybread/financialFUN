import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackcalComponent } from './blackcal.component';

describe('BlackcalComponent', () => {
  let component: BlackcalComponent;
  let fixture: ComponentFixture<BlackcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackcalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlackcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
