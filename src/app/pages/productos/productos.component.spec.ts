import { Component } from '@angular/core';
import { Producto } from '../../models/productos.models';
import { ProductoService } from '../../services/productos.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-producto',
  imports: [FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductoComponent {
  productos: any;
  producto = new Producto();

  constructor(private productoService: ProductoService) {
    this.getProductos();
  }

  // Método para obtener el listado de productos
  async getProductos(): Promise<void> {
    this.productos = await firstValueFrom(this.productoService.getProductos());
  }

  // Método para insertar un producto desde el formulario
  insertarProducto() {
    this.productoService.agregarProducto(this.producto);
    this.producto = new Producto();
    this.getProductos();
  }

  // Método para seleccionar un producto de la tabla
  selectProducto(productoSeleccionado: Producto) {
    this.producto = productoSeleccionado;
  }

  // Método para modificar un producto desde el formulario
  updateProducto() {
    this.productoService.modificarProducto(this.producto);
    this.producto = new Producto();
    this.getProductos();
  }

  // Método para eliminar un producto
  deleteProducto() {
    this.productoService.eliminarProducto(this.producto);
    this.producto = new Producto();
    this.getProductos();
  }

  // Método para ayudar a Angular a hacer un seguimiento de los elementos en la tabla
  trackById(index: number, item: Producto) {
    return item.id;
  }
}
