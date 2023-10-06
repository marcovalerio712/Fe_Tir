import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComComponent } from './lista-com.component';

describe('ListaComComponent', () => {
  let component: ListaComComponent;
  let fixture: ComponentFixture<ListaComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaComComponent]
    });
    fixture = TestBed.createComponent(ListaComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
