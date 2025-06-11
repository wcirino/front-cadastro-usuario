import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

// Máscara
import { NgxMaskModule } from 'ngx-mask';

// Componentes
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroEditarComponent } from './cadastro-editar/cadastro-editar.component';
import { CadastroListarComponent } from './cadastro-listar/cadastro-listar.component';
import { CadastroDesativarAtivarComponent } from './cadastro-desativar-ativar/cadastro-desativar-ativar.component';
import { PermissoesAdicionarComponent } from './permissoes-adicionar/permissoes-adicionar.component';
import { PermissoesListarComponent } from './permissoes-listar/permissoes-listar.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { SobreComponent } from './sobre/sobre.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { Erro404Component } from './erro404/erro404.component';

@NgModule({
  declarations: [
    CadastroUsuarioComponent,
    CadastroEditarComponent,
    CadastroListarComponent,
    CadastroDesativarAtivarComponent,
    PermissoesAdicionarComponent,
    PermissoesListarComponent,
    HomeComponent,
    SobreComponent,
    AlterarSenhaComponent,
    Erro404Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    // Material
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,

    // Máscara
    NgxMaskModule
  ]
})
export class PagesModule { }
