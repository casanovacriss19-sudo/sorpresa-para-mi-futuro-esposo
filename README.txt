# Sorpresa para mi niño hermoso precioso 🤍

Una página web romántica, adaptable a celular y computador, hecha con HTML, CSS y JavaScript sin frameworks.

## Cómo verla
1. Descomprime `sorpresa_para_mi_nino.zip`.
2. Abre `index.html` en Chrome o en otro navegador.
3. Para editarla, abre los archivos con un editor de texto. No cambies los nombres de los archivos.

## Personalizar el contador
Abre `script.js` y busca:
`const START_DATE = "";`
Pon la fecha en formato `AAAA-MM-DD`, por ejemplo `2024-02-14`. Deja las comillas y no uses la fecha del ejemplo a menos que corresponda. Cuando la fecha está definida en el código, queda fija para todos los visitantes.

Si prefieres, también puedes elegir la fecha en la página mientras la pruebas; esa selección se guarda solamente en ese navegador.

## Añadir fotos para que él también las vea
Las vistas previas de los espacios de foto son temporales. Para que las fotos estén publicadas para todos:
1. Copia las imágenes elegidas a la carpeta `assets`.
2. En `index.html`, reemplaza cada bloque `<label class="photo-slot"...>` por una imagen, por ejemplo:
   `<div class="photo-slot large"><img src="assets/recuerdo1.jpg" alt="Un recuerdo juntos"></div>`
3. Usa los nombres exactos de tus archivos. Puedes repetirlo con `recuerdo2.jpg` y `recuerdo3.jpg`.

## Añadir música
1. Elige un archivo de audio MP3 que tengas derecho a usar y cópialo a `assets`.
2. Nómbralo `cancion.mp3`.
3. El botón ♫ podrá reproducirlo. En celulares la música debe empezar después de que la persona toque el botón; eso es normal.

## Publicarla gratis con GitHub Pages
Necesitas una cuenta de GitHub:
1. Entra a https://github.com y crea una cuenta o inicia sesión.
2. Crea un repositorio nuevo, por ejemplo `sorpresa-para-mi-nino`. Para una sorpresa privada, recuerda que los sitios publicados en Pages suelen ser accesibles públicamente si alguien tiene el enlace.
3. Sube `index.html`, `styles.css`, `script.js` y la carpeta `assets` con tus fotos y la canción. Sube los archivos, no el ZIP comprimido.
4. En el repositorio abre **Settings → Pages**.
5. En “Build and deployment”, selecciona **Deploy from a branch**, elige **main** y la carpeta **/(root)** y guarda.
6. Espera a que GitHub genere la dirección, normalmente con formato `https://TU-USUARIO.github.io/sorpresa-para-mi-nino/`.

También puedes usar Netlify Drop: https://app.netlify.com/drop. Descomprime primero el ZIP y arrastra la carpeta del sitio si la interfaz lo permite.

## Privacidad
Una página web publicada no es un espacio privado ni una contraseña para los recuerdos. Evita incluir información personal sensible. La música no se incluye en el ZIP: debes agregar tu propio MP3.
