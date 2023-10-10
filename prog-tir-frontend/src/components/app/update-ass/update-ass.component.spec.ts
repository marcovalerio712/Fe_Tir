import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssComponent } from './update-ass.component';

describe('UpdateAssComponent', () => {
  let component: UpdateAssComponent;
  let fixture: ComponentFixture<UpdateAssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAssComponent]
    });
    fixture = TestBed.createComponent(UpdateAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
