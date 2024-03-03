[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-Sampeerez/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-Sampeerez?branch=main)

# Clases e interfaces genéricas. Principios SOLID

## Autor

- Samuel Pérez López

## Índice

1. [Resumen](#resumen)
2. [Introducción y Objetivos](#introducción-y-objetivos)
3. [Desarrollo](#desarrollo)
   - [Ejercicio 1](#ejercicio-1)
   - [Ejercicio 2](#ejercicio-2)
4. [Conclusiones](#conclusiones)
5. [Recomendaciones](#recomendaciones)

## Resumen

Esta práctica de Clases e interfaces genéricas. Principios SOLID en TypeScript consistió en resolver ejercicios sobre facturas y su manejo con distintos formatos y una mudanza con distintos tipos de enseres. Cada ejercicio tenía una complejidad diferente que me empujó a pensar de manera creativa y buscar soluciones ingeniosas. Al final, salí con una comprensión más profunda de TypeScript y cómo aplicarlo en situaciones prácticas.

## Introducción y Objetivo

El objetivo principal de esta práctica fue llevar mis habilidades de programación a un nivel más avanzado. Apliqué los conceptos teóricos que aprendí en clase a problemas más específicos. Además, quería mejorar mi manejo de clases e interfaces mientras realizaba los ejercicios y apliqué los principios SOLID.

## Desarrollo

### Ejercicio 1

Para desarrollar un sistema de información que gestione los enseres de una mudanza, comencé por definir una interfaz genérica Enser, que sirve como abstracción para los diferentes tipos de enseres que se pueden trasladar. Esta interfaz incluye propiedades comunes a todos los enseres, como el nombre.

Luego, implementé varias clases que representan diferentes tipos de enseres, como Ropa, Mueble y Libro. Cada una de estas clases implementa la interfaz Enser, asegurando que todas tengan las propiedades requeridas.

A continuación, diseñé la clase Caja, que utiliza tipos genéricos para permitir el almacenamiento de diferentes tipos de enseres. Esta clase incluye métodos para añadir y eliminar enseres, así como para listar su contenido en la consola.

Para facilitar la búsqueda de enseres en las cajas, implementé un método buscar en la clase Caja que permite buscar enseres por su nombre.

A lo largo de todo el proceso, me aseguré de seguir los principios SOLID. Por ejemplo, cada clase tiene una única responsabilidad y todas las dependencias se inyectan a través del constructor (principio de inversión de dependencias). Además, utilizo interfaces para definir contratos para las clases, lo que permite un alto grado de flexibilidad y reutilización (principio de sustitución de Liskov y principio de segregación de interfaces).

### Ejercicio 2

Para diseñar un sistema de información que gestione la facturación básica, comencé por definir una interfaz Invoice que sirve como abstracción para una factura. Esta interfaz incluye propiedades comunes a todas las facturas, como el ID, el nombre del cliente, la dirección del cliente, los artículos, el monto total, la fecha de la factura, la fecha de vencimiento y la extensión del archivo.

Luego, implementé varias clases que representan diferentes formatos de facturas, como Pdf, Html y Json. Cada una de estas clases implementa la interfaz Invoice, asegurando que todas tengan las propiedades requeridas. Además, cada clase tiene un método específico para convertir la factura a su formato correspondiente (toPdf, toHtml, toJson).

A continuación, diseñé la clase InvoiceManager, que gestiona un conjunto de facturas. Esta clase incluye métodos para añadir y eliminar facturas, calcular el total facturado y mostrar todas las facturas.

El diseño de este sistema respeta los principios SOLID. Por ejemplo, cada clase tiene una única responsabilidad y todas las dependencias se inyectan a través del constructor (principio de inversión de dependencias). Además, utilizo interfaces para definir contratos para las clases, lo que permite un alto grado de flexibilidad y reutilización (principio de sustitución de Liskov y principio de segregación de interfaces).

En particular, el hecho de que el sistema pueda añadir nuevos formatos de facturas sin necesidad de modificar el resto del código es un ejemplo del principio de abierto/cerrado. Este principio establece que las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación. En este caso, podemos añadir nuevas clases de facturas que implementen la interfaz Invoice sin tener que cambiar la clase InvoiceManager o las otras clases de facturas.

## Conclusiones

A lo largo de los ejercicios, pude mejorar mis habilidades en mi manejo de clases e interfaces. Cada ejercicio fue una oportunidad para aprender algo nuevo y reforzar mi comprensión de TypeScript en un entorno práctico.

## Recomendaciones

Me pareció muy útil buscar recursos adicionales, como tutoriales y documentación, para ampliar el conocimiento sobre las herramientas y técnicas utilizadas. También recomendaría mantener una actitud de curiosidad y perseverancia porque es fundamental para superar los desafíos que puedan surgir en el camino de aprendizaje.