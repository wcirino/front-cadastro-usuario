import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-permissoes-listar',
  templateUrl: './permissoes-listar.component.html',
  styleUrls: ['./permissoes-listar.component.scss']
})
export class PermissoesListarComponent implements OnInit {

  form!: FormGroup;
  allPermissions: string[] = ['ADMIN', 'EDITOR', 'VIEWER', 'FINANCEIRO', 'RELATORIOS'];
  selectedPermissions: string[] = [];

  user: any = null;
  mockUsers = [
    {
      userId: 1,
      username: 'joao.silva',
      registrationNumber: '1001',
      permissions: ['ADMIN', 'VIEWER']
    },
    {
      userId: 2,
      username: 'maria.santos',
      registrationNumber: '1002',
      permissions: ['EDITOR']
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: ['']
    });
  }

  buscarUsuario(): void {
    const searchValue = this.form.value.search.trim().toLowerCase();
    const found = this.mockUsers.find(user =>
      user.username.toLowerCase().includes(searchValue) || user.registrationNumber.includes(searchValue)
    );

    if (found) {
      this.user = found;
      this.selectedPermissions = [...found.permissions];
    } else {
      this.user = null;
      this.selectedPermissions = [];
    }
  }

  get availablePermissions(): string[] {
    return this.allPermissions.filter(p => !this.selectedPermissions.includes(p));
  }

  adicionar(permission: string): void {
    if (!this.selectedPermissions.includes(permission)) {
      this.selectedPermissions.push(permission);
    }
  }

  remover(permission: string): void {
    this.selectedPermissions = this.selectedPermissions.filter(p => p !== permission);
  }

  salvar(): void {
    if (!this.user) return;

    const payload = this.selectedPermissions.map(p => ({
      userId: this.user.userId,
      username: this.user.username,
      registrationNumber: this.user.registrationNumber,
      permissionName: p
    }));

    console.log('📦 Payload para envio:', payload);
  }
}

