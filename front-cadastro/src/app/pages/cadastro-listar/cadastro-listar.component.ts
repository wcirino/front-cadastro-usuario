import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cadastro-listar',
  templateUrl: './cadastro-listar.component.html',
  styleUrls: ['./cadastro-listar.component.scss']
})
export class CadastroListarComponent implements OnInit, AfterViewInit {
  form!: FormGroup;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['registrationNumber', 'firstName', 'lastName', 'email', 'city', 'cpf', 'acoes'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private fb: FormBuilder) {}

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
        { registrationNumber: 1003, firstName: 'Pedro', lastName: 'Cruz', email: 'pcruz@example.com', city: 'Brasília', cpf: '999999999' },
        { registrationNumber: 1004, firstName: 'Ana', lastName: 'Ferreira', email: 'ana@example.com', city: 'Salvador', cpf: '888888888' },
        { registrationNumber: 1005, firstName: 'José', lastName: 'Costa', email: 'jose@example.com', city: 'Fortaleza', cpf: '99988877710' }
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

  visualizar(element: any): void {
    console.log('Visualizar:', element);
  }

  editar(element: any): void {
    console.log('Editar:', element);
  }

  alternarStatus(element: any): void {
    console.log('Alternar status:', element);
  }
}
