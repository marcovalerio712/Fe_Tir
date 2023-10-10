import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimbraturaComponent } from './timbratura.component';

describe('TimbraturaComponent', () => {
  let component: TimbraturaComponent;
  let fixture: ComponentFixture<TimbraturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimbraturaComponent]
    });
    fixture = TestBed.createComponent(TimbraturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
