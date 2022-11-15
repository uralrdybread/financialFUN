import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErkelcalComponent } from './erkelcal.component';

describe('ErkelcalComponent', () => {
  let component: ErkelcalComponent;
  let fixture: ComponentFixture<ErkelcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErkelcalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErkelcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
