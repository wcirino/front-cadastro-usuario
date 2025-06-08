import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataHoje = new Date();
  horaAgora: string = '';

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    const agora = new Date();
    this.horaAgora = agora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // this.toastr.success('Usuário salvo com sucesso!', 'Sucesso', {
    //   timeOut: 5000,
    //   positionClass: 'toast-top-right',
    //   closeButton: true,
    //   progressBar: true
    // });

    // this.toastr.error('Falha ao salvar', 'Erro', {
    //   timeOut: 10000,
    //   positionClass: 'toast-bottom-center',
    //   closeButton: true,
    //   progressBar: false
    // });

    // Swal.fire({
    //   title: 'Sucesso!',
    //   text: 'A ação foi concluída com sucesso.',
    //   icon: 'success',
    //   confirmButtonText: 'Fechar',
    //   customClass: {
    //     confirmButton: 'botao-cor-principal'
    //   }
    // });
  }
}
