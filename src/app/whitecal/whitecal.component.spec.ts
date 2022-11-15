import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhitecalComponent } from './whitecal.component';

describe('WhitecalComponent', () => {
  let component: WhitecalComponent;
  let fixture: ComponentFixture<WhitecalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhitecalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhitecalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
