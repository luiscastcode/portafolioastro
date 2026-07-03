---
layout: ../../layouts/LayoutBlog.astro
metatitulo: "Como subir tu proyecto web local a GIT"
posttitle: "Guía para Usar Git: Sube Tu Proyecto Web Local"
pubDate: 7-3-2026
ruta: blog/como-subir-tu-proyecto-local-a-git/
autor: lcastcode
description: "Domina Git y GitHub con esta guía práctica para desarrolladores web. Aprende a crear repositorios, subir código, resolver errores y colaborar en equipo."
excerpt: Guía completa de Git para pricipiantes en desarrollo web
image:
  src: ../../img/posts/github.webp
  alt: github para pricipiantes
---

## ¿Por qué Git es esencial para tu flujo de trabajo?

Si has comenzado un proyecto web y has perdido código por no tener respaldo, o has tenido problemas para trabajar con otros desarrolladores en el mismo archivo, Git es la solución que necesitas. Esta guía te mostrará cómo usar Git para gestionar tu código, colaborar con otros y mantener un historial completo de cambios sin complicaciones.

## Conceptos básicos que debes conocer antes de empezar

### Términos fundamentales de Git

| Término | Definición práctica |
|---------|-------------------|
| **Repositorio (Repo)** | Es la carpeta donde Git almacena el historial de cambios de tu proyecto, como un registro cronológico de cada modificación. |
| **Commit** | Es una captura instantánea de tus archivos en un momento específico, como guardar una partida para poder volver a ese punto. |
| **Push** | Envía tus cambios locales al repositorio remoto (como GitHub), actualizando la versión en la nube. |
| **Pull** | Descarga los cambios del repositorio remoto a tu computadora, actualizando tu versión local. |
| **Branch (Rama)** | Es una línea de desarrollo independiente que te permite trabajar en nuevas funcionalidades sin afectar el código principal. |
| **Merge** | Une los cambios de diferentes ramas, integrando el trabajo de varios desarrolladores o funcionalidades. |
| **Clone** | Crea una copia exacta de un repositorio remoto en tu computadora local. |
| **Staging (Área de preparación)** | Es un espacio temporal donde preparas los archivos antes de hacer commit, seleccionando qué cambios quieres guardar. |
| **Origin** | Nombre por defecto que recibe el repositorio remoto desde el cual clonaste o conectaste tu proyecto. |

### La terminología que más usarás: explicada

- **Main/Master**: La rama principal y estable de tu proyecto, donde el código debe estar siempre funcionando.
- **Feature branch**: Ramas temporales que creas para desarrollar nuevas características.
- **Pull Request (PR)**: Solicitud que haces para que tus cambios sean revisados y fusionados en la rama principal.
- **Fork**: Copia de un repositorio a tu cuenta, útil para contribuir en proyectos open source.

## Preparando tu entorno de trabajo

### Instalación necesaria
1. Descarga Git desde [git-scm.com](https://git-scm.com)
2. Crea una cuenta gratuita en [GitHub](https://github.com)
3. Configura tu identidad en la terminal:
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

## Método 1: Crear un repositorio nuevo y subir tu proyecto

### Paso 1: Crear el repositorio en GitHub
- Ingresa a GitHub y haz clic en el botón **"New"** o **"Nuevo repositorio"**
- Asigna un nombre a tu proyecto
- Opcional: añade una descripción
- Selecciona **"Public"** o **"Private"**
- **Importante:** No marques la opción "Add a README file" si ya tienes tu proyecto en local
- Haz clic en **"Create repository"**

### Paso 2: Configurar tu proyecto local
Abre la terminal en la carpeta de tu proyecto web y ejecuta:
```bash
# Inicializa Git en tu carpeta
git init

# Añade todos los archivos al área de preparación
git add .

# Crea tu primer commit con un mensaje
git commit -m "Primera versión del proyecto"
```

### Paso 3: Conectar y subir a GitHub
```bash
# Conecta tu repositorio local con el remoto
git remote add origin https://github.com/TU_USUARIO/NOMBRE_PROYECTO.git

# Sube tu código (nota: usa main o master según tu rama)
git push -u origin main
```

## Método 2: Clonar un repositorio existente

Si quieres empezar trabajando desde un repositorio ya creado en GitHub:

```bash
# Clona el repositorio
git clone https://github.com/TU_USUARIO/NOMBRE_PROYECTO.git

# Entra a la carpeta del proyecto
cd NOMBRE_PROYECTO
```

## Flujo de trabajo diario: cómo usar Git correctamente

### Para descargar y actualizar tu código local
```bash
# Descarga los cambios del repositorio remoto
git pull origin main
```

### Para subir tus cambios diarios
```bash
# Verifica qué archivos has modificado
git status

# Añade archivos específicos o todos los cambios
git add .                     # Añade todos
git add nombre-archivo.html   # Añade un archivo específico

# Crea un commit con tu mensaje
git commit -m "Descripción clara del cambio realizado"

# Sube tus cambios
git push origin main
```

## Solución de problemas comunes

### Error: "remote origin already exists"
Cuando ya tienes un remoto configurado y quieres cambiarlo:
```bash
# Ver el remoto actual
git remote -v

# Cambiar la URL del remoto
git remote set-url origin https://github.com/NUEVO_USUARIO/NUEVO_PROYECTO.git
```

### Error de autenticación o contraseña (a partir de agosto 2021)
GitHub ya no permite autenticación con contraseña. Usa un token personal:
1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Genera un token con permisos para repositorios
3. Cuando te pida usuario y contraseña:
   - Usuario: tu nombre de usuario de GitHub
   - Contraseña: el token generado (no tu contraseña de GitHub)

### Error: "failed to push some refs"
Generalmente ocurre cuando tu repositorio remoto tiene commits que no tienes localmente:
```bash
# Primero descarga los cambios remotos
git pull origin main

# Resuelve conflictos si existen, luego vuelve a subir
git push origin main
```

### Error: "src refspec master does not match any"
Tu rama local se llama `main` pero estás intentando subir a `master`:
```bash
# Cambia el nombre de tu rama local
git branch -M main

# O sube explícitamente a la rama correcta
git push -u origin main
```

## Consejos profesionales para desarrolladores web

### Buenas prácticas de commits
- **Mensajes descriptivos:** "Corrige error en responsive del header" en lugar de "cambios"
- **Commits atómicos:** Un commit por funcionalidad o corrección, no cambios masivos
- **Commits frecuentes:** Mejor muchos commits pequeños que uno gigante

### Gestión de ramas (branches)
```bash
# Crear una nueva rama para una funcionalidad
git checkout -b nueva-funcionalidad

# Cambiar entre ramas
git checkout main

# Unir cambios de otra rama
git merge nueva-funcionalidad
```

### Ignorar archivos innecesarios
Crea un archivo `.gitignore` en la raíz de tu proyecto:
```
# Ignorar dependencias
node_modules/

# Ignorar archivos de entorno
.env
.env.local

# Ignorar archivos de sistema
.DS_Store
Thumbs.db
```

### Comandos útiles adicionales
```bash
# Ver historial de commits
git log --oneline --graph

# Deshacer cambios en archivos no guardados
git checkout -- nombre-archivo.html

# Ver diferencias entre versiones
git diff
```

## Para equipos de desarrollo web

1. **Establece una estrategia de ramas:** Define cómo nombrar y usar ramas (ej: feature/nombre, bugfix/descripcion)
2. **Usa Pull Requests:** Revisa el código antes de fusionarlo en la rama principal
3. **Mantén main siempre estable:** La rama principal debe contener código funcional siempre
4. **Actualiza frecuentemente:** Haz pull regularmente para evitar conflictos grandes

## Errores comunes y cómo evitarlos

| Error | Solución preventiva |
|-------|-------------------|
| Subir archivos de configuración con contraseñas | Usa `.gitignore` siempre |
| Conflictos grandes en merge | Actualiza tu rama frecuentemente (`git pull`) |
| Perder trabajo por no haber hecho commit | Acostúmbrate a hacer commits antes de cambiar de rama |
| No tener respaldo del código | Sube tu código diariamente a GitHub |

## Recursos adicionales
- [Documentación oficial de Git](https://git-scm.com/doc)
- [GitHub Docs - Configurar Git](https://docs.github.com/es/get-started/quickstart/set-up-git)
- [Git Branching - Libro interactivo](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)