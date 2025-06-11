import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-desativar-ativar',
  templateUrl: './cadastro-desativar-ativar.component.html',
  styleUrls: ['./cadastro-desativar-ativar.component.scss']
})
export class CadastroDesativarAtivarComponent implements OnInit {

  busca = '';
  usuario: any = null;

  // mock de usuários
  mockUsuarios = [
    { nome: 'João Silva', login: 'joao.silva', numeroRegistro: '1001', ativo: true },
    { nome: 'Maria Santos', login: 'maria.santos', numeroRegistro: '1002', ativo: false }
  ];

  ngOnInit(): void {}

  buscarUsuario(): void {
    const termo = this.busca.trim().toLowerCase();
    const resultado = this.mockUsuarios.find(user =>
      user.login.toLowerCase() === termo || user.numeroRegistro === termo
    );

    if (resultado) {
      this.usuario = resultado;
    } else {
      this.usuario = null;
      Swal.fire('Não encontrado', 'Usuário não localizado.', 'info');
    }
  }

  alterarStatus(): void {
    if (!this.usuario) return;

    const acao = this.usuario.ativo ? 'desativar' : 'ativar';

    Swal.fire({
      title: `Deseja ${acao} este usuário?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then(result => {
      if (result.isConfirmed) {
        this.usuario.ativo = !this.usuario.ativo;

        Swal.fire(
          'Sucesso!',
          `Usuário ${this.usuario.ativo ? 'ativado' : 'desativado'} com sucesso.`,
          'success'
        );
      }
    });
  }
}
