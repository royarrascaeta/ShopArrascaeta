# Tienda virtual con React - by RoyArrascaeta

_Este proyecto está realizado con React.js_

## Características y funcionamiento

- El nombre de la tienda es "Serendipia Shop", la temática de los productos es de instrumentos musicales organizados en distintas categorías (por el momento solo 6).
- En el home se muestran todos los productos, al hacer click en uno nos lleva a la página de detalle del mismo donde podemos seleccionar la cantidad deseada (tiene límite de stock asignado) y presionar el botón **Agregar al carrito** que agrega el item al carrito.
- En el NavBar (menú de navegación) se puede navegar por las categorías disponibles y filtrar así el total de productos. Para ver todos los productos nuevamente basta con clickear en la categoría **Todos**.
- El Cart muestra el detalle de los productos añadidos pudiendo eliminar de a uno, o bien limpiar todo el carrito. También se puede acceder a los productos haciendo click en su nombre. Una vez terminada la compra, se debe completar el formulario para procesar la orden. Éste tiene una función para validar que el e-mail ingresado sea correcto (se ingresa dos veces), en caso que no coincidan se muestra un cartel de error, el cual desaparece cuando la coincidencia ocurre.
- Una vez finalizada la compra nos muestra nuestro número de orden.

## Requisitos y puesta en marcha

Para arrancar correctamente este proyecto primer debes instalar las siguientes dependencias via npm:

- Sass:
  > <code>npm install node-sass --save</code>
- React router dom:
  > <code>npm install --save react-router-dom </code>
- Firebase
  > <code>npm install --save firebase</code>

Una vez listo lo siguiente es levantar el proyecto:

- > <code>npm start</code>

Luego de unos minutos el servidor local está listo y se abrirá en el navegador la aplicación.
