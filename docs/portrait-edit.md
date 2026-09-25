# Edición del retrato · 25 de septiembre de 2026

Foto proporcionada por Cristian. Se editó con la herramienta integrada de generación/edición de imágenes para sustituir el fondo por un tratamiento azul oscuro con acento celeste. La fotografía original no se modificó.

Asset publicado: `src/assets/cristian-portrait.webp`, 720 × 900 px, 37.130 bytes. El resultado PNG se convirtió a WebP con Sharp (calidad 86), sin añadir dependencias al proyecto. El marco y la transición hacia el pie del retrato se resuelven en CSS.

## Prompt utilizado

```text
Use case: identity-preserve / background-swap.
Asset type: portrait photo for the hero of Cristian Molina's software developer portfolio.
Input image: the attached local photograph is the EDIT TARGET, not an inspiration for a different person.
Primary request: edit the supplied real portrait by replacing the pale wall with a restrained professional studio backdrop integrated with a dark navy and cyan website. Preserve the EXACT person's identity, facial structure, eyes, nose, smile and teeth, hairstyle, ears, skin tone and natural texture, body proportions, crossed-arm pose, hands and original navy polo. Do not beautify, reshape, age, slim, or redesign the face or body. Keep the authentic expression and photograph feel.
Scene/backdrop: deep ink navy #0b141b and blue-gray #111e28 with a very soft, low-intensity desaturated cyan #7bdded radial glow behind the shoulders that fades to the dark edges. Smooth, understated studio background, no scenery and no objects. Keep a clean realistic silhouette and natural hair edges. Very restrained soft light separation from the background, without a bright neon halo. Preserve the original front lighting on the person; any color balancing must be very subtle.
Composition: vertical portrait, aspect ratio 4:5, centered person from head to below crossed forearms as in the input. Allow modest breathing room above hair and at both sides, shoulders and arms inside frame. Photorealistic photographic background edit, no illustration and no AI stylization.
Avoid: text, logos, watermark, devices, code, circuitry, neon rings, stars, particles, busy gradients, plastic skin, regenerated facial features or altered clothing. Output only the finished portrait image.
```

## Integración

- `NgOptimizedImage` con `priority`, dimensiones explícitas y texto alternativo.
- Fondo, borde y superficie coherentes con la paleta existente.
- Menú e inicio con superficies táctiles de al menos 48 px.
- Se mantiene Angular 18.2. Las recomendaciones de Angular 20/22 de la guía actual no se aplican automáticamente a esta versión.

Referencias: [guía de Angular con IA](https://angular.dev/ai/develop-with-ai), [optimización de imágenes en Angular 18](https://v18.angular.dev/guide/image-optimization/) y [Material Design](https://m3.material.io/).
