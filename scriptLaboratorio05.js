/*
    Laboratorio # 5
    1. Adrian Caiza
    2. Erick Nuñez
    3. Jhonny Villanueva M.
*/

// PAGINA WEB DEWALT 

// Primera forma de trabajar con fetch()
fetch('https://dwstore.ec/?s=Taladro&post_type=product&type_aws=true&aws_id=1&aws_filter=1')
    .then( r => r.json() )
    .then( p => console.log(p))
    .catch( e => console.log(e))


// Segunda forma de trabajar con fetch()

// Creamos una variables para guardar la dirreccion de la Api
let productos = 'https://dwstore.ec/?s=Taladro&post_type=product&type_aws=true&aws_id=1&aws_filter=1';

// Creamos la funcion para obtener los productos o extraer los productos desde una api
const obtenerProductos = async () => {
    try {
        const response = await fetch(productos);
        const p = await response.json();
        console.log(p);
    }catch (e) {
        console.log(e)
    }
}

// Utilizamos la funcion obtener productos
obtenerProductos();
