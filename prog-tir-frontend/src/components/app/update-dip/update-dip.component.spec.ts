import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDipComponent } from './update-dip.component';

describe('UpdateDipComponent', () => {
  let component: UpdateDipComponent;
  let fixture: ComponentFixture<UpdateDipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDipComponent]
    });
    fixture = TestBed.createComponent(UpdateDipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
