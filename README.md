# Portfolio de Cristian Nahuel Molina

Portfolio personal con Angular 18.2 y componentes standalone. Conserva la identidad oscura con acento celeste y tipografía Barlow local.

## Desarrollo

```sh
npm ci
npm start
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

Usar Node compatible con Angular 18 (por ejemplo, Node 22).
Las pruebas necesitan Chrome; definir `CHROME_BIN` si no se detecta.
Salida de producción: `dist/my-portfolio/browser`.

## Despliegue

`vercel.json` configura build, salida, rutas antiguas y descarga del PDF.
El despliegue anterior ya está publicado en https://cristianmolina.vercel.app/.
La rama main contiene la versión preparada para el despliegue automático de Vercel.

Las rutas anteriores `/aboutme`, `/projects`, `/education`, `/contacto` y `/experiencia` redirigen a las secciones de la portada.
Al cambiar de dominio, actualizar canonical, Open Graph, Twitter, robots y sitemap.

## Contenido

- **Portada:** rol y especialidad profesional en PHP/JavaScript para ERP, proyectos con Java/Spring Boot y solo dos acciones principales.
- **Rubicom:** desde junio de 2025. La experiencia se presenta en seis áreas: informes y tableros, exportaciones a Excel, caja/cobros/tarjetas, permisos/sucursales, cálculos/IVA Digital y mantenimiento del ERP. Se detallan la selección de productos, columnas dinámicas por listas de precios y restricciones para cajeros. Stack completo: PHP, JavaScript, jQuery, AJAX, Bootstrap y JSON. Sin casos reducidos ni resultados inventados.
- **TurnApp:** proyecto personal con backend y arquitectura en desarrollo. Java 21, Spring Boot y PostgreSQL; Angular previsto. Panel técnico interno, sin enlace que sugiera una demo inexistente.
- **HiveRH:** MVP universitario en equipo. API implementada; Angular y producción previstos, según la aclaración de Cristian. No se presenta como producto comercial ni como desarrollo individual.
- **Selección:** solo TurnApp e HiveRH en proyectos; Rubicom permanece como experiencia profesional. Una sección secundaria plegada muestra Traiani Agrimensura y Blog PHP como aprendizaje. No se muestran Exploradores de Formas ni la práctica del clima.
- **Sobre mí:** comprensión de procesos, reglas de negocio y desarrollo profesional; habilidades diferenciadas por contexto.
- **Formación:** UTN desde 2024, en curso; Mar del Plata Programa en 2023 y cursos con sus certificados.
- **Contacto:** oportunidades laborales y proyectos freelance; formulario real, email, LinkedIn, GitHub y CV público.

## Fuentes y límites del contenido

Revisión del 23–24 de septiembre de 2026:

- Información laboral, TurnApp y planes de HiveRH: proporcionados por Cristian.
- [HiveRH, main](https://github.com/ncristianmolina/HiveRH/tree/main): README, documentación de entidades/endpoints y modelo conceptual, pom.xml, JPA, Spring Security, JWT, autorización por recurso, controladores y servicio de liquidaciones. Se cotejaron roles y validación de duplicados mensuales. No se ejecutó el backend ni se certificó su seguridad.
- En HiveRH se evita indicar versión de Java: el pom declara Java 17 y también source/target 21. Comparte Java/Spring Boot y el frontend Angular previsto con TurnApp; se mantienen las bases verificadas: MySQL en HiveRH y PostgreSQL en TurnApp.
- No se encontró un repositorio público identificable de TurnApp. No se reemplaza por otros repositorios de turnos.
- Blog PHP se enlaza de forma secundaria, con descripción limitada a ejercicios de PHP y conexión a MySQL. El árbol y el código consultados no respaldan las funcionalidades de blog anunciadas por su README, que además declara mejoras de seguridad pendientes. No se atribuyen CRUD, sesiones ni seguridad verificada.
- [Traiani Agrimensura](https://traiani-agrimensura.vercel.app/): sitio publicado revisado en navegador; presenta equipamiento, servicios, preguntas frecuentes, información profesional y contacto. El pie acredita a Cristian; la autoría también fue confirmada por él. No se enviaron consultas ni se certificó el funcionamiento de su formulario.
- Práctica del clima retirada para concentrar la evidencia en los proyectos elegidos. El código consultado usa una consulta fija sin manejo de errores de red.
- Certificados cotejados: fullstack Udemy (2023), C# nivel 1 Maxi Programa (2024), SQL Server (2024), Git/GitHub (2024). El curso de Udemy es independiente de Mar del Plata Programa.

## Formulario de contacto

Implementado en `src/app/menu/contacto/contact-form.component.*`, con envío asíncrono sin salir del portfolio:

- Acción: `https://formspree.io/f/xnnnnlzg`.
- Método: POST.
- Campos: `name`, `email` y `message`, obligatorios, con etiquetas, autocompletado y límites de longitud.
- El botón «Abrir formulario» navega a `#formulario`.
- El navegador valida los datos antes de enviarlos. El componente intercepta el envío y usa `fetch`, `FormData` y `Accept: application/json`.
- Muestra «Enviando…» y evita envíos duplicados. Solo confirma el éxito y limpia los campos cuando Formspree responde correctamente.
- Ante errores HTTP, de red o una espera mayor a 20 segundos, conserva los campos y ofrece reintentar o contactar por email. Los avisos son accesibles para lectores de pantalla.
- No requiere nuevas dependencias, secretos ni backend propio. Conserva `action` y `method` en el formulario.
- Integración basada en las guías facilitadas por Cristian y la [documentación de Formspree](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax/).

Se probaron campos vacíos y email inválido, y se verificaron éxito, error HTTP, fallo de red, reintento y prevención de envíos duplicados con respuestas simuladas en pruebas unitarias. Falta confirmar recepción real con la cuenta de Formspree; no se generó correo de prueba. La activación, destinatarios y restricciones de dominio se administran en Formspree.

## Navegación y accesibilidad

`PortfolioViewportScroller` integra el desplazamiento suave con Angular Router, conserva la restauración de posición y enfoca la sección con `preventScroll`.
Esto evita que el foco inicie otro desplazamiento y oculte el título detrás del encabezado fijo.
Si el visitante prefiere movimiento reducido, el desplazamiento es inmediato.

Se conservan el enlace para saltar al contenido, encabezados semánticos, foco visible, menú con `aria-expanded`, cierre con Escape y al navegar, y metadatos sociales.

## CV público

`src/assets/cv/CV_Cristian_Nahuel_Molina.pdf` contiene la copia autorizada sin teléfono (57.579 bytes).
El original no se modifica. Ambos botones apuntan al mismo PDF.
Se volvió a extraer su texto: conserva Rubicom desde junio de 2025, stack PHP/Java, backend personal en desarrollo y UTN en curso.
El CV recibido no menciona HiveRH y mantiene una referencia genérica a otros proyectos web. No se inventó una contribución individual para actualizarlo.

## Validación de esta pasada

- Producción: compilación correcta, sin advertencias. Bundle inicial 276,10 kB; transferencia estimada 75,20 kB, sin assets.
- Pruebas: 16 correctas en ChromeHeadless, incluyendo envío asíncrono, navegación, CV/formulario, menú, desplazamiento suave, movimiento reducido y restauración de posición.
- Navegador real: 320, 375, 390, 768, 1024 y 1440 px. Sin desbordamiento horizontal, también con esquema y certificados desplegados y con el formulario presente.
- Párrafos de experiencia, proyectos y nodos del esquema: 16 px. Descripción de portada: 18 px. Etiquetas y textos secundarios: al menos 14 px.
- Botones, enlaces y controles visibles: al menos 44 px de alto.
- Menú probado con Enter y Escape; foco visible y cierre al elegir una sección.
- Desplazamiento comprobado en navegador: cambia de posición y termina con la sección a unos 100 px del borde superior, con foco en el destino.
- Descarga real del CV desde contacto y HTTP 200/application/pdf. Certificados: HTTP 200/image/jpeg. Perfil GitHub y repositorio HiveRH: HTTP 200.
- LinkedIn conserva la URL facilitada; su consulta automatizada devolvió 999, por lo que no se certifica el contenido del perfil.
- Consola sin errores ni advertencias durante las comprobaciones.
- Zoom real pendiente: el navegador integrado disponible no aplicó Ctrl+ y no expone un control de zoom. Las pruebas de ancho no se presentan como equivalentes a una prueba de zoom.

En escritorio, Rubicom muestra seis áreas en tres columnas (dos en tablet y una en móvil), con encabezado y stack a todo el ancho. HiveRH usa columnas; el esquema de TurnApp desplegado muestra tres nodos en fila. En móvil se apilan, los botones del hero quedan juntos, las habilidades pasan a una columna y los campos del formulario ocupan el ancho disponible.

## Archivos de esta pasada

- `src/styles.css` y estilos de navbar/footer: tamaños, controles y espaciado.
- `src/app/menu/home`, `experience`, `aboutme` y `education`: portada, legibilidad y contenido.
- `src/app/menu/projects/projects.component.*`, `hiverh.component.*` y `other-work.component.ts`: destacados, esquema y enlaces secundarios. Se elimina el componente de aprendizaje anterior.
- `src/app/menu/contacto/contacto.component.*` y `contact-form.component.*`: contacto y formulario Formspree.
- `src/app/portfolio-viewport-scroller.ts`, su spec y `app.config.ts`: transición accesible entre secciones.
- `src/app/app.component.spec.ts` y spec de contacto: navegación y contrato del formulario.
