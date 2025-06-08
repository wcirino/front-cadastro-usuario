import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare const bootstrap: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  usuario: string = 'Willyan';
  temaSelecionado: string = 'azul';

  @ViewChild('modalRef') modalRef!: ElementRef;

  ngOnInit(): void {
    const temaSalvo = localStorage.getItem('temaPreferido');
    if (temaSalvo) {
      this.temaSelecionado = temaSalvo;
      this.aplicarTema(false); // aplica só se o usuário já escolheu
    }

  }

  selecionarTema(tema: string) {
    this.temaSelecionado = tema;
  }

  aplicarTema(fecharModal: boolean = true) {
    const tema = this.temaSelecionado;
    localStorage.setItem('temaPreferido', tema);

    // limpa classes antigas se por acaso tiver ficado alguma
    const body = document.body;
    body.className = ''; // zera tudo, ou usa body.classList.remove(...) se tiver outras classes

    const root = document.documentElement;

    // Define a cor principal dinamicamente via CSS variable
    const cores: any = {
      'azul': '#1e2a38',
      'azul-bootstrap': '#0d6efd',
      'verde': '#198754',
      'cinza': '#dee2e6',
      'roxo': '#4b0082',
      'vermelho': '#dc3545',
      'laranja': '#fd7e14',
      'amarelo': '#ffc107',
      'teal': '#20c997',
      'preto': '#000000',
      'azul-claro': '#bcd4ff',
      'verde-claro': '#d1f2eb',
      'cinza-claro': '#f8f9fa',
      'lilas-claro': '#e0bbff'
    };

    root.style.setProperty('--cor-principal', cores[tema]);

    // Fecha o modal
    if (fecharModal && this.modalRef) {
      const modal = this.modalRef.nativeElement;
      modal.classList.remove('show');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
      const backdrop = document.querySelector('.modal-backdrop');
      if (backdrop) backdrop.remove();
    }
  }

  closeOffcanvas() {
  const el = document.querySelector('.offcanvas.show');
  if (el) {
    const modal = bootstrap.Offcanvas.getInstance(el);
    modal?.hide();
  }
}

}
