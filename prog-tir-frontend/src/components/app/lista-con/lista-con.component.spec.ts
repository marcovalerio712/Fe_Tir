import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConComponent } from './lista-con.component';

describe('ListaConComponent', () => {
  let component: ListaConComponent;
  let fixture: ComponentFixture<ListaConComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaConComponent]
    });
    fixture = TestBed.createComponent(ListaConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
