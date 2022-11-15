import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreencalComponent } from './greencal.component';

describe('GreencalComponent', () => {
  let component: GreencalComponent;
  let fixture: ComponentFixture<GreencalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreencalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreencalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
