import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataHoje = new Date();
  horaAgora: string = '';

  ngOnInit(): void {
    const agora = new Date();
    this.horaAgora = agora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
