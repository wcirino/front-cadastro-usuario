import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ESTADOS_BR } from 'src/app/model/form.constants';
import { CIDADES_BR } from 'src/app/model/cidades.constants';

@Component({
  selector: 'app-cadastro-editar',
  templateUrl: './cadastro-editar.component.html',
  styleUrls: ['./cadastro-editar.component.scss']
})
export class CadastroEditarComponent implements OnInit {
  form!: FormGroup;
  sucesso = false;
  erro = false;
  estados = ESTADOS_BR;
  cidadesFiltradas: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [{ value: '', disabled: true }, Validators.required],
      registrationNumber: [{ value: '', disabled: true }],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cpf: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      birthdate: ['', Validators.required]
    });

    this.carregarDadosUsuario(); // carrega os dados mockados no início
  }

  carregarCidades(): void {
    const siglaEstado = this.form.get('state')?.value;
    this.cidadesFiltradas = CIDADES_BR[siglaEstado] || [];
    this.form.get('city')?.reset();
  }

  carregarDadosUsuario(): void {
    const dados = {
      user: {
        username: 'wcirino'
      },
      registrationNumber: 1001,
      firstName: 'João',
      lastName: 'Silva',
      email: 'joao@example.com',
      phoneNumber: '123456789',
      address: 'Rua das Flores, 123',
      zipCode: '12345-678',
      city: 'São Paulo',
      state: 'SP',
      birthdate: '1990-01-01T00:00:00.000+00:00',
      cpf: '12345678910'
    };

    this.cidadesFiltradas = CIDADES_BR[dados.state] || [];

    this.form.patchValue({
      username: dados.user.username,
      registrationNumber: dados.registrationNumber,
      firstName: dados.firstName,
      lastName: dados.lastName,
      email: dados.email,
      phoneNumber: dados.phoneNumber,
      address: dados.address,
      zipCode: dados.zipCode,
      city: dados.city,
      state: dados.state,
      birthdate: dados.birthdate.split('T')[0], // tira só a data
      cpf: dados.cpf
    });
  }

  atualizar(): void {
    this.sucesso = false;
    this.erro = false;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.getRawValue();

    const payload = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      phoneNumber: formValue.phoneNumber,
      address: formValue.address,
      zipCode: formValue.zipCode,
      city: formValue.city,
      birthdate: new Date(formValue.birthdate).toISOString(),
      cpf: formValue.cpf
    };

    try {
      console.log('Payload para salvar:', payload);
      this.sucesso = true;
    } catch {
      this.erro = true;
    }
  }

  limpar(): void {
    this.form.reset();
    this.form.markAsUntouched();
    this.form.markAsPristine();
    this.sucesso = false;
    this.erro = false;
    this.cidadesFiltradas = [];
  }

  campoInvalido(campo: string): boolean {
    const control = this.form.get(campo);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  campoValido(campo: string): boolean {
    const control = this.form.get(campo);
    return !!control && control.valid && (control.dirty || control.touched);
  }
}
