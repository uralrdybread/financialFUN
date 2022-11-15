import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BleucalComponent } from './bleucal.component';

describe('BleucalComponent', () => {
  let component: BleucalComponent;
  let fixture: ComponentFixture<BleucalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BleucalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BleucalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
