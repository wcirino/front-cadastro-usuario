import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  form!: FormGroup;
  sucesso = false;
  erro = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cpf: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      birthdate: ['', Validators.required]
    });
  }

  cadastrar(): void {
    this.sucesso = false;
    this.erro = false;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    try {
      console.log('Dados enviados:', this.form.value);
      this.sucesso = true;
      this.form.reset();
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
  }

  campoInvalido(campo: string): boolean {
    const control = this.form.get(campo);
    return !!control && control.invalid && (control.dirty || control.touched);
  }
}
