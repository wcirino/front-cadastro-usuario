import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissoesListarComponent } from './permissoes-listar.component';

describe('PermissoesListarComponent', () => {
  let component: PermissoesListarComponent;
  let fixture: ComponentFixture<PermissoesListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissoesListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissoesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
