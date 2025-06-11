import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.scss']
})
export class AlterarSenhaComponent implements OnInit {

  form!: FormGroup;
  showAtual = false;
  showNova = false;
  showConfirm = false;

  barraForca = 0;
  forcaTexto = '';
  barraForcaClasse = 'bg-danger';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      senhaAtual: ['', Validators.required],
      novaSenha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['']
    }, { validators: this.senhasIguais });
  }

  senhasIguais(group: AbstractControl): null | object {
    const nova = group.get('novaSenha')?.value;
    const confirm = group.get('confirmarSenha')?.value;
    return nova === confirm ? null : { senhaDiferente: true };
  }

  alterarSenha(): void {
    if (this.form.invalid) {
      Swal.fire('Atenção', 'Verifique os campos obrigatórios e se as senhas coincidem.', 'warning');
      return;
    }

    const payload = this.form.value;
    console.log('🔐 Alterando senha com:', payload);

    Swal.fire('Sucesso', 'Senha alterada com sucesso!', 'success');
    this.form.reset();
  }

  verificarForcaSenha(): void {
    const senha = this.form.get('novaSenha')?.value || '';
    let forca = 0;

    if (senha.length >= 6) forca += 1;
    if (/[A-Z]/.test(senha)) forca += 1;
    if (/[0-9]/.test(senha)) forca += 1;
    if (/[^A-Za-z0-9]/.test(senha)) forca += 1;

    switch (forca) {
      case 0:
      case 1:
        this.barraForca = 25;
        this.forcaTexto = 'Muito fraca';
        this.barraForcaClasse = 'bg-danger';
        break;
      case 2:
        this.barraForca = 50;
        this.forcaTexto = 'Fraca';
        this.barraForcaClasse = 'bg-warning';
        break;
      case 3:
        this.barraForca = 75;
        this.forcaTexto = 'Boa';
        this.barraForcaClasse = 'bg-info';
        break;
      case 4:
        this.barraForca = 100;
        this.forcaTexto = 'Forte';
        this.barraForcaClasse = 'bg-success';
        break;
    }
  }

}
