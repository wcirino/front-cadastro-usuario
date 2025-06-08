import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <- necessário
import { ToastrModule } from 'ngx-toastr'; // <- toastr aqui

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { CadastroEditarComponent } from './pages/cadastro-editar/cadastro-editar.component';
import { CadastroListarComponent } from './pages/cadastro-listar/cadastro-listar.component';
import { PermissoesAdicionarComponent } from './pages/permissoes-adicionar/permissoes-adicionar.component';
import { PermissoesListarComponent } from './pages/permissoes-listar/permissoes-listar.component';
import { CadastroDesativarAtivarComponent } from './pages/cadastro-desativar-ativar/cadastro-desativar-ativar.component';
import { AlterarSenhaComponent } from './pages/alterar-senha/alterar-senha.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    CadastroEditarComponent,
    CadastroListarComponent,
    PermissoesAdicionarComponent,
    PermissoesListarComponent,
    CadastroDesativarAtivarComponent,
    AlterarSenhaComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule,
    SharedModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 3000,
      preventDuplicates: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
