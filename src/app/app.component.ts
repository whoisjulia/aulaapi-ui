import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto de Aula';

  categorias =[
    {id: '1', nome: 'Informática'},
    {id: '1', nome: 'Escritório'},
    {id: '1', nome: 'Perfumaria'},
    {id: '1', nome: 'Lazer'}
  ]
}
