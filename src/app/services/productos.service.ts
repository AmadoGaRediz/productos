import { inject, Injectable } from '@angular/core';
import { Producto } from '../models/productos.models';
import { first } from 'rxjs';
import { collection, collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { addDoc, doc, updateDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private db: Firestore = inject(Firestore);

  constructor() {}

  // Método para obtener todos los documentos de la colección productos
  getProductos() {
    const productosCollection = collection(this.db, 'productos');
    return collectionData(productosCollection, { idField: 'id' }).pipe(first());
  }

  // Método para agregar un producto a la colección productos
  agregarProducto(producto: Producto) {
    const productosCollection = collection(this.db, 'productos');
    const productoData = {
      descripcion: producto.descripcion,
      precio: producto.precio,
    };
    addDoc(productosCollection, productoData);
  }

  // Método para modificar un documento
  modificarProducto(producto: Producto) {
    const documentRef = doc(this.db, 'productos', producto.id);
    updateDoc(documentRef, {
      descripcion: producto.descripcion,
      precio: producto.precio,
    });
  }

  // Método para eliminar un producto
  eliminarProducto(producto: Producto) {
    const documentoRef = doc(this.db, 'productos', producto.id);
    deleteDoc(documentoRef);
  }
}
