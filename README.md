# Portfolio de Cristian Nahuel Molina

Portfolio personal en Angular 18.2, con componentes standalone y una página con navegación por secciones.

## Ejecutar y compilar

```sh
npm ci
npm start
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

Usar una versión de Node compatible con Angular 18 (por ejemplo, Node 22).
Las pruebas requieren Google Chrome; si no se detecta, definir `CHROME_BIN` con la ruta de su ejecutable.
El servidor local se abre en http://localhost:4200.
La salida de producción está en `dist/my-portfolio/browser`.

## Despliegue en Vercel

`vercel.json` configura el comando de build, la carpeta de salida, las rutas antiguas y la descarga del CV con tipo PDF.
Importar este repositorio en Vercel y usar `npm ci` como comando de instalación.
No requiere variables de entorno ni backend de contacto.
El sitio no fue publicado como parte de esta implementación.

Las rutas anteriores `/aboutme`, `/projects`, `/education`, `/contacto` y `/experiencia` redirigen al fragmento correspondiente de la portada.
Los enlaces internos usan RouterLink para coordinar el desplazamiento con Angular.
Si se cambia de dominio, actualizar canonical, Open Graph y Twitter en `src/index.html`, y `public/robots.txt` y `public/sitemap.xml`.

## Contenido y componentes

- `src/app/menu/home`: encabezado, retrato, experiencia actual y accesos a experiencia, proyectos, contacto y CV.
- `src/app/menu/experience`: trabajo en Rubicom desde junio de 2025; sin datos, código ni pantallas privadas.
- `src/app/menu/projects`: TurnApp, HiveRH y un componente reutilizable para proyectos de aprendizaje.
- `src/app/menu/aboutme`: perfil y habilidades diferenciadas por contexto de uso.
- `src/app/menu/education`: UTN en curso desde 2024, Mar del Plata Programa (UTN y ATICMA) y certificados verificables.
- `src/app/menu/contacto`: email, LinkedIn, GitHub y descarga del CV. No hay envío simulado ni formulario.
- `src/styles.css`: colores, tipografía local, contenedores, botones y reglas compartidas.

## Fuentes y alcance verificados

Revisión del 23 de septiembre de 2026:

- Información laboral y TurnApp: datos proporcionados por Cristian. TurnApp se describe como backend y arquitectura en desarrollo, con Angular previsto. No se inventa repositorio público, demo ni interfaz.
- [HiveRH, rama main](https://github.com/ncristianmolina/HiveRH/tree/main): README, documentación de entidades/endpoints y modelo conceptual, pom.xml, entidades y repositorios JPA, configuración de Spring Security, filtro JWT, autorización por recurso, controladores y servicio de liquidaciones. Se presenta como MVP académico en equipo. Las afirmaciones sobre acceso a liquidaciones propias y duplicados mensuales se cotejaron con código; no se ejecutó el backend ni se certificó su seguridad. Se usa «Java» sin versión porque el pom declara Java 17 y también source/target 21.
- [Blog PHP](https://github.com/ncristianmolina/blogPhp): README y estructura con contenido. Se presenta como aprendizaje y se conservan las mejoras de seguridad pendientes indicadas por el autor.
- [El clima ahora](https://github.com/ncristianmolina/OpenWeatherMapMDP): estructura, página de entrada y referencia a JavaScript/API. Se enlaza al código; no se promete una demo funcional.
- Real State se omitió: el repositorio público consultado estaba vacío y su endpoint de contenido respondía 404. Su antigua captura no acredita una demo disponible.
- Certificados locales revisados visualmente: Fullstack Udemy (2023), C# nivel 1 de Maxi Programa (2024), SQL Server (2024), Git/GitHub (2024). El curso de Udemy es independiente del de Mar del Plata Programa.

## CV público

`src/assets/cv/CV_Cristian_Nahuel_Molina.pdf` contiene la copia pública autorizada sin teléfono.
Se preservaron el resto del contenido, las fechas y la estructura de una página; el archivo original no se modificó.
Se comprobó la extracción completa de texto y el renderizado final. Los botones del encabezado y contacto apuntan al mismo PDF real.

Al reemplazarlo, usar una versión sin datos que no se quieran publicar y verificar ambos botones.
El CV recibido todavía no menciona HiveRH; incorporar ese proyecto al PDF sería una edición de contenido adicional.

## Validación

- `npm run build`: correcto, sin advertencias; bundle inicial de 274.63 kB, transferencia estimada de 74.96 kB (JS y CSS, sin assets).
- `npm test -- --watch=false --browsers=ChromeHeadless`: 9 pruebas correctas. Incluyen rutas heredadas, destinos de navegación, un único contacto, enlaces al CV y apertura/cierre del menú.
- Navegador: anchos 320, 375, 768, 1024 y 1440 px. Se verificaron dimensiones de los elementos y ausencia de desbordamiento horizontal; imágenes cargadas, un único h1 y un único contacto.
- Revisión visual de portada, tarjetas y contacto en escritorio y móvil.
- Menú con `aria-expanded`, cierre al navegar y con Escape, foco visible, secciones enfocables, enlace para saltar al contenido y encabezados jerárquicos.
- CSS respeta `prefers-reduced-motion`. Imágenes WebP y fuente local, sin Google Fonts ni bibliotecas de animación.
- PDF disponible por HTTP 200 con `application/pdf`; descarga real comprobada desde el botón.
- Metadatos en español, canonical, Open Graph, Twitter, favicon, robots y sitemap.
- Sin errores ni advertencias en la consola del navegador durante la comprobación.

## Material que permitiría mejorar el portfolio

- Detalle de la contribución individual a HiveRH para profundizar sin atribuirse el trabajo de todo el equipo.
- Repositorio público y evidencias reales de TurnApp cuando estén disponibles.
- Capturas auténticas de proyectos públicos; no incorporar pantallas ni datos del ERP privado.
- Resultados medibles de Rubicom que se puedan comunicar, si existen y están autorizados.
