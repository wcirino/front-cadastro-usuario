import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CadastroEditarComponent } from './pages/cadastro-editar/cadastro-editar.component';
import { CadastroListarComponent } from './pages/cadastro-listar/cadastro-listar.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { AlterarSenhaComponent } from './pages/alterar-senha/alterar-senha.component';
import { CadastroDesativarAtivarComponent } from './pages/cadastro-desativar-ativar/cadastro-desativar-ativar.component';
import { PermissoesAdicionarComponent } from './pages/permissoes-adicionar/permissoes-adicionar.component';
import { PermissoesListarComponent } from './pages/permissoes-listar/permissoes-listar.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { Erro404Component } from './pages/erro404/erro404.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-editar', component: CadastroEditarComponent },
  { path: 'cadastro-listar', component: CadastroListarComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
  { path: 'alterar-senha', component: AlterarSenhaComponent },
  { path: 'cadastro-desativar-ativar', component: CadastroDesativarAtivarComponent },
  { path: 'permissoes-adicionar', component: PermissoesAdicionarComponent },
  { path: 'permissoes-listar', component: PermissoesListarComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'alterar-senha', component: AlterarSenhaComponent },
  { path: '**', component: Erro404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
