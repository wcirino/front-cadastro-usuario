import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissoesAdicionarComponent } from './permissoes-adicionar.component';

describe('PermissoesAdicionarComponent', () => {
  let component: PermissoesAdicionarComponent;
  let fixture: ComponentFixture<PermissoesAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissoesAdicionarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermissoesAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
