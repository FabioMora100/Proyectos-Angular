import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listEstudiantes: any[]=[
     {nombre: 'Fabio Mora', estado:'Promocionado'},
    {nombre: 'Martina Duran', estado:'Promocionado'},
    {nombre: 'David torres', estado:'Regular'},
    {nombre: 'Vero Gimenez', estado:'Libre'},
  ] 

  mostrar= true; 

  toogle(): void{
    this.mostrar= !this.mostrar

  }
}
