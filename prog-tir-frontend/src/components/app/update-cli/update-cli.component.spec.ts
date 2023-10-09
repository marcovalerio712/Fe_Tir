import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCliComponent } from './update-cli.component';

describe('UpdateCliComponent', () => {
  let component: UpdateCliComponent;
  let fixture: ComponentFixture<UpdateCliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCliComponent]
    });
    fixture = TestBed.createComponent(UpdateCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
