import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDipComponent } from './lista-dip.component';

describe('ListaDipComponent', () => {
  let component: ListaDipComponent;
  let fixture: ComponentFixture<ListaDipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDipComponent]
    });
    fixture = TestBed.createComponent(ListaDipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
