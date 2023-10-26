import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssDipComponent } from './ass-dip.component';

describe('AssDipComponent', () => {
  let component: AssDipComponent;
  let fixture: ComponentFixture<AssDipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssDipComponent]
    });
    fixture = TestBed.createComponent(AssDipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
