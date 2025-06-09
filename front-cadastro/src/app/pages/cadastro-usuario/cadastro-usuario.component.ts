import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { ESTADOS_BR } from 'src/app/model/form.constants';
import { CIDADES_BR } from 'src/app/model/cidades.constants';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  form!: FormGroup;
  sucesso = false;
  erro = false;

  estados = ESTADOS_BR;
  cidades: string[] = [];
  cidadesFiltradas: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', {
        validators: [Validators.required],
        asyncValidators: [this.usernameDisponivel()],
        updateOn: 'blur'
      }],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cpf: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      birthdate: ['', [Validators.required, this.validarIdadeMinima(12)]]
    });
  }

  usernameDisponivel(): AsyncValidatorFn {
    const usados = ['admin', 'usuario', 'willyan', 'teste'];
    return (control: AbstractControl) => {
      return of(usados.includes(control.value?.toLowerCase()))
        .pipe(
          delay(600),
          map(existe => existe ? { usernameJaExiste: true } : null)
        );
    };
  }

  validarIdadeMinima(min: number) {
    return (control: AbstractControl) => {
      const nascimento = new Date(control.value);
      const hoje = new Date();
      const idade = hoje.getFullYear() - nascimento.getFullYear();
      return idade < min ? { idadeInvalida: true } : null;
    };
  }

  carregarCidades(): void {
    const siglaEstado = this.form.get('state')?.value;
    this.cidadesFiltradas = CIDADES_BR[siglaEstado] || [];
    this.form.get('city')?.reset();
  }

  cadastrar(): void {
    this.sucesso = false;
    this.erro = false;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.value;

    const payload = {
      user: {
        username: formValue.username,
        accountNonExpired: true,
        accountNonLocked: true,
        enabled: true,
        lastLogin: new Date().toISOString()
      },
      registrationNumber: 1073741824,
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
      console.log('Payload final:', payload);
      this.sucesso = true;
      this.form.reset();

      Swal.fire({
        title: 'Sucesso!',
        text: 'Usuário cadastrado com sucesso.',
        icon: 'success',
        confirmButtonText: 'Fechar',
        customClass: { confirmButton: 'botao-cor-principal' }
      });

    } catch {
      this.erro = true;

      Swal.fire({
        title: 'Erro!',
        text: 'Não foi possível cadastrar. Tente novamente.',
        icon: 'error',
        confirmButtonText: 'Fechar',
        timer: 10000,
        showConfirmButton: false
      });
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
