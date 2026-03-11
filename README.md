# Portafolio Personal

Este proyecto es un portafolio personal desarrollado con Astro, Tailwind CSS y GSAP. El objetivo del sitio es presentar información personal, intereses y algunos elementos visuales interactivos que reflejan tanto habilidades técnicas como creatividad en el desarrollo web.

## Secciones del proyecto

### Inicio

La sección de inicio funciona como la presentación principal del sitio. Aquí se muestra la primera impresión del portafolio, con animaciones de entrada que introducen al visitante al contenido. Estas animaciones están diseñadas para hacer que la experiencia inicial sea dinámica y atractiva.

### Sobre Mí

En esta sección se presenta información personal sobre el desarrollador. Incluye una descripción general de quién soy, mis intereses y mis metas profesionales como desarrollador backend.

También se implementa una fecha dinámica que se actualiza automáticamente y un cálculo automático de edad basado en la fecha de nacimiento (2 de septiembre de 2005). Esto permite que la información del perfil se mantenga actualizada sin necesidad de modificar el código manualmente con el paso del tiempo.

Además, se incluye una fotografía personal y una descripción sobre mis objetivos dentro del desarrollo de software, especialmente enfocados en el desarrollo backend.

### Dona Giratoria

Esta sección presenta una animación interactiva basada en scroll. Se muestra una imagen de una dona que gira 360 grados a medida que el usuario se desplaza por la página.

Durante la rotación se producen varios efectos sincronizados:

- El texto cambia cada 90 grados mostrando información relacionada con Universidad, Institución y Años.
- El color de fondo cambia progresivamente realizando una transición entre los colores blanco, azul, amarillo y rojo.
- Al finalizar la rotación aparece una tabla con información académica.

El objetivo de esta sección es demostrar el uso de animaciones controladas por scroll utilizando GSAP.

### Pasatiempos

La sección de pasatiempos está dividida en tres subsecciones que representan algunos intereses personales.

#### Programación

Describe el interés por la programación y la creación de soluciones tecnológicas. Se explica cómo el desarrollo de software se convierte en una herramienta para resolver problemas y construir proyectos útiles.

#### Música

En esta subsección se describen algunos gustos musicales, incluyendo artistas como The Beatles, Michael Jackson y Queen. Además, se implementa una animación visual donde notas musicales flotan en la pantalla utilizando GSAP, aportando dinamismo a la sección.

#### Videojuegos

Esta parte del portafolio destaca el videojuego Helldivers 2. Incluye una animación controlada por scroll basada en una secuencia de 36 cuadros que muestran el movimiento de la muerte de un Bile Titan, generando una experiencia visual interactiva para el usuario.

## Tecnologías utilizadas

- Astro
- Tailwind CSS
- GSAP

Estas tecnologías permiten construir una interfaz moderna, optimizada y con animaciones fluidas.

## Instalación y ejecución del proyecto

Para ejecutar el proyecto localmente se deben seguir los siguientes pasos.

Primero, clonar el repositorio:

``git clone https://github.com/JhersonCastro/Astro-Web.git``

Luego instalar las dependencias:

``npm install``

Finalmente iniciar el servidor de desarrollo:

``npm run dev``

Una vez iniciado, el proyecto se puede visualizar en el navegador en la dirección:

``http://localhost:4321``
De esta forma podrás visualizar las imágenes correctamente al ejecutar el proyecto en tu máquina.



