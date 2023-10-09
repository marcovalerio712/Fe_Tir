import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDipComponent } from './new-dip.component';

describe('NewDipComponent', () => {
  let component: NewDipComponent;
  let fixture: ComponentFixture<NewDipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewDipComponent]
    });
    fixture = TestBed.createComponent(NewDipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
