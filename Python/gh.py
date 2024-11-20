@startuml
package "Sistema de Carrito de Compras" {
    class Carrito {
        - carrito: Producto[]
        + constructor()
        + cargarDesdeLocalStorage(): void
        + actualizarEnLocalStorage(): void
        + agregar(id: number): void
        + eliminar(id: number): void
        + vaciar(): void
        + encontrarProducto(id: number): Producto
        + mostrar(tablaCarrito: HTMLElement, totalCompra: HTMLElement, cantidadProductos: HTMLElement): void
        + calcularTotal(): number
        + obtenerProductos(): Producto[]
    }

    class Producto {
        - id: number
        - nombre: string
        - descripcion: string
        - precio: number
        - imagen: string
        - cantidad: number
        + constructor(id: number, nombre: string, descripcion: string, precio: number, imagen: string, cantidad: number)
        + actualizarCantidad(nuevaCantidad: number): void
        + mostrarDetalles(): string
    }

    class Requerimiento {
        - nombre: string
        - apellido: string
        - presupuesto: number
        - email: string
        - cantidadProductos: number
        - direccion: string
        - domicilio: boolean
        - recogerEnTienda: boolean
        + constructor(nombre: string, apellido: string, presupuesto: number, email: string, cantidadProductos: number, direccion: string, domicilio: boolean, recogerEnTienda: boolean)
        + validarDatos(): boolean
        + mostrarInformacion(): string
    }

    class LocalStorageHelper {
        + guardarEnLocalStorage(key: string, data: any): boolean
        + recuperarDesdeLocalStorage(key: string): any
        + vaciarLocalStorage(key: string): boolean
        + vaciarTodoLocalStorage(): boolean
        + existeEnLocalStorage(key: string): boolean
        + limpiarLocalStorage(): void
    }

    class ProductoService {
        + cargarProductos(): Promise<void>
        + guardarEnLocalStorage(productos: Producto[]): void
        + mostrarProductos(productos: Producto[]): void
        + filtrarProductos(condicion: string): Producto[]
        + ordenarProductos(criterio: string): Producto[]
    }

    Carrito --> Producto : Composición
    Carrito --> LocalStorageHelper : Utiliza
    ProductoService --> LocalStorageHelper : Utiliza
}
@enduml
