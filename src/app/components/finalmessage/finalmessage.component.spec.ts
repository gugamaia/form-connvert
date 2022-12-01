import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalmessageComponent } from './finalmessage.component';

describe('FinalmessageComponent', () => {
  let component: FinalmessageComponent;
  let fixture: ComponentFixture<FinalmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
