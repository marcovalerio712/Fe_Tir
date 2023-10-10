import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAssComponent } from './lista-ass.component';

describe('ListaAssComponent', () => {
  let component: ListaAssComponent;
  let fixture: ComponentFixture<ListaAssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaAssComponent]
    });
    fixture = TestBed.createComponent(ListaAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
