import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';

declare var bootstrap: any;

@Component({
  selector: 'app-cadastro-listar',
  templateUrl: './cadastro-listar.component.html',
  styleUrls: ['./cadastro-listar.component.scss']
})
export class CadastroListarComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['registrationNumber', 'firstName', 'lastName', 'email', 'city', 'cpf', 'acoes'];
  formModal!: FormGroup;
  modoModal: 'visualizar' | 'editar' = 'visualizar';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      registrationNumber: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      city: [''],
      cpf: ['']
    });

    this.dataSource.data = this.carregarMock().content;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  carregarMock() {
    return {
      content: [
        { registrationNumber: 1001, firstName: 'João', lastName: 'Silva', email: 'joao@example.com', city: 'São Paulo', cpf: '12345678910' },
        { registrationNumber: 1002, firstName: 'Maria', lastName: 'Santos', email: 'maria@example.com', city: 'Rio de Janeiro', cpf: '987654321' },
        { registrationNumber: 1003, firstName: 'Pedro', lastName: 'cruz', email: 'pcruz@example.com', city: 'Brasília', cpf: '99999999999' },
        { registrationNumber: 1004, firstName: 'Ana', lastName: 'Ferreira', email: 'ana@example.com', city: 'Salvador', cpf: '88888888888' },
        { registrationNumber: 1005, firstName: 'José', lastName: 'Costa', email: 'jose@example.com', city: 'Fortaleza', cpf: '99988877710' },
        { registrationNumber: 1006, firstName: 'Carla', lastName: 'Pereira', email: 'carla@example.com', city: 'Recife', cpf: '33322211110' },
        { registrationNumber: 1007, firstName: 'Luiz', lastName: 'Rocha', email: 'luiz@example.com', city: 'Manaus', cpf: '77766655510' },
        { registrationNumber: 1008, firstName: 'Amanda', lastName: 'Almeida', email: 'amanda@example.com', city: 'Porto Alegre', cpf: '44433322210' },
        { registrationNumber: 1009, firstName: 'Paulo', lastName: 'Sousa', email: 'paulo@example.com', city: 'Curitiba', cpf: '88877766610' },
        { registrationNumber: 1010, firstName: 'Fernanda', lastName: 'Cunha', email: 'fernanda@example.com', city: 'Belém', cpf: '22211100010' },
        { registrationNumber: 1011, firstName: 'Gustavo', lastName: 'Lima', email: 'gustavo@example.com', city: 'Porto Velho', cpf: '99988877710' },
        { registrationNumber: 1012, firstName: 'Mariana', lastName: 'Martins', email: 'mariana@example.com', city: 'João Pessoa', cpf: '77766655510' },
        { registrationNumber: 1013, firstName: 'Ricardo', lastName: 'Barbosa', email: 'ricardo@example.com', city: 'Maceió', cpf: '44433322210' },
        { registrationNumber: 1014, firstName: 'Camila', lastName: 'Dias', email: 'camila@example.com', city: 'Florianópolis', cpf: '88877766610' },
        { registrationNumber: 1015, firstName: 'André', lastName: 'Fernandes', email: 'andre@example.com', city: 'Goiânia', cpf: '22211100010' },
        { registrationNumber: 1016, firstName: 'Carolina', lastName: 'Araújo', email: 'carolina@example.com', city: 'Teresina', cpf: '99988877710' },
        { registrationNumber: 1017, firstName: 'Rodrigo', lastName: 'Oliveira', email: 'rodrigo@example.com', city: 'Campo Grande', cpf: '77766655510' },
        { registrationNumber: 1018, firstName: 'Isabela', lastName: 'Campos', email: 'isabela@example.com', city: 'Vitória', cpf: '44433322210' }
      ]
    };
  }


  pesquisar(): void {
    const filtros = this.form.value;
    this.dataSource.data = this.carregarMock().content.filter(usuario =>
      (!filtros.registrationNumber || usuario.registrationNumber.toString().includes(filtros.registrationNumber)) &&
      (!filtros.firstName || usuario.firstName.toLowerCase().includes(filtros.firstName.toLowerCase())) &&
      (!filtros.lastName || usuario.lastName.toLowerCase().includes(filtros.lastName.toLowerCase())) &&
      (!filtros.email || usuario.email.toLowerCase().includes(filtros.email.toLowerCase())) &&
      (!filtros.city || usuario.city.toLowerCase().includes(filtros.city.toLowerCase())) &&
      (!filtros.cpf || usuario.cpf.includes(filtros.cpf))
    );
  }

  limpar(): void {
    this.form.reset();
    this.dataSource.data = this.carregarMock().content;
  }

  visualizar(usuario: any): void {
    this.modoModal = 'visualizar';
    this.abrirModal(usuario);
  }

  editar(usuario: any): void {
    this.modoModal = 'editar';
    this.abrirModal(usuario);
  }

  abrirModal(data: any): void {
    this.formModal = this.fb.group({
      registrationNumber: [data.registrationNumber],
      firstName: [data.firstName],
      lastName: [data.lastName],
      email: [data.email],
      city: [data.city],
      cpf: [data.cpf]
    });

    const modal = new bootstrap.Modal(document.getElementById('modalUsuario')!);
    modal.show();
  }

  salvarEdicao(): void {
    console.log('Salvando dados:', this.formModal.value);
    bootstrap.Modal.getInstance(document.getElementById('modalUsuario')!)?.hide();
  }

  alternarStatus(usuario: any): void {
  const statusAtual = usuario.ativo; // Supondo que você tenha um campo "ativo"
  const acao = statusAtual ? 'Desativar' : 'Ativar';
  const icone = statusAtual ? 'warning' : 'success';

  Swal.fire({
    title: `${acao} usuário?`,
    text: `Você tem certeza que deseja ${acao.toLowerCase()} o usuário ${usuario.firstName} ${usuario.lastName}?`,
    icon: icone,
    showCancelButton: true,
    confirmButtonColor: statusAtual ? '#dc3545' : '#198754',
    cancelButtonColor: '#6c757d',
    confirmButtonText: acao,
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      usuario.ativo = !statusAtual; // Alterna o status (mock)
      Swal.fire({
        icon: 'success',
        title: `Usuário ${acao.toLowerCase()}do com sucesso!`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  });
}

}
