import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDesativarAtivarComponent } from './cadastro-desativar-ativar.component';

describe('CadastroDesativarAtivarComponent', () => {
  let component: CadastroDesativarAtivarComponent;
  let fixture: ComponentFixture<CadastroDesativarAtivarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDesativarAtivarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDesativarAtivarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
