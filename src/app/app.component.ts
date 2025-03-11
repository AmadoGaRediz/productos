import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductoComponent } from './pages/productos/productos.component.spec';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'productos';
}
