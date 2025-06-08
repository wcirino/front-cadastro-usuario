import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroListarComponent } from './cadastro-listar.component';

describe('CadastroListarComponent', () => {
  let component: CadastroListarComponent;
  let fixture: ComponentFixture<CadastroListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
