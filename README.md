# Desarrollo de Aplicaciones Web

# Laboratorio 05 - Consumo de API con Fetch

Este proyecto es parte del Laboratorio 05 y tiene como objetivo practicar el consumo de APIs utilizando JavaScript y el método `fetch()`. Se realiza una conexión con el sitio web de **Dewalt Store Ecuador** para obtener productos relacionados con la palabra clave "Taladro".

## Descripción

El script demuestra dos formas de consumir una API:

### 1. Uso básico de `fetch()`

```javascript
fetch('https://dwstore.ec/?s=Taladro&post_type=product&type_aws=true&aws_id=1&aws_filter=1')
    .then( r => r.json() )
    .then( p => console.log(p))
    .catch( e => console.log(e))
```
Este enfoque utiliza promesas encadenadas para obtener y mostrar los datos.

### 2. Uso de fetch() con async/await
```javascript
let productos = 'https://dwstore.ec/?s=Taladro&post_type=product&type_aws=true&aws_id=1&aws_filter=1';

const obtenerProductos = async () => {
    try {
        const response = await fetch(productos);
        const p = await response.json();
        console.log(p);
    } catch (e) {
        console.log(e)
    }
}

obtenerProductos();
```
Este método utiliza funciones asincrónicas para una sintaxis más limpia y fácil de leer.

### Requisitos
Navegador moderno con soporte para ES6+

Conexión a internet para acceder a la API

### Instrucciones de uso
Copiar el código en un archivo .js

Incluir el script en una página HTML o ejecutarlo en la consola del navegador

Observar los datos obtenidos desde la consola del navegador

## Autor 📧
Desarrollador: @jmvillanueva-dev

Correo: jhonny.villanueva@epn.edu.ec
