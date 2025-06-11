import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-permissoes-adicionar',
  templateUrl: './permissoes-adicionar.component.html',
  styleUrls: ['./permissoes-adicionar.component.scss']
})
export class PermissoesAdicionarComponent implements OnInit {

  form!: FormGroup;

  // Lista de sistemas disponíveis
  sistemas: string[] = ['SISTEMA_ERP', 'PORTAL_RH', 'FINANCEIRO', 'ACADEMICO', 'INTRANET'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      permission_name: ['', Validators.required],
      description: [''],
      sistema: ['', Validators.required]
    });
  }

  salvar(): void {
    if (this.form.invalid) {
      Swal.fire('Atenção', 'Preencha todos os campos obrigatórios.', 'warning');
      return;
    }

    Swal.fire({
      title: 'Deseja salvar a permissão?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sim, salvar',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.isConfirmed) {
        const payload = this.form.value;

        // Enviar para o backend
        console.log('🔐 Permissão cadastrada:', payload);

        Swal.fire('Sucesso', 'Permissão cadastrada com sucesso.', 'success');
        this.form.reset();
      }
    });
  }

}
