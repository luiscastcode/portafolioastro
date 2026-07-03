---
layout: ../../layouts/LayoutBlog.astro
metatitulo: "Instalación de JDK y Android Studio Narwhal 3 en Windows"
posttitle: "Instalación de JDK y Android Studio Narwhal 3 en Windows"
pubDate: 7-2-2026
ruta: blog/instalación-jdk-y-android-studio-narwhal3-windows/
autor: lcastcode
description: "Aprende a configurar tu entorno de desarrollo Android en Windows: JDK, Android Studio Narwhal 3 y variables de entorno necesarias."
excerpt: Guía para configurar el entorno de desarrollo Java y Android en Windows
image:
  src: ../../img/posts/android-studio.png
  alt: android studio narwhal
---

## Parte 1: Instalación y configuración del JDK

Para esta guía usaremos el archivo .zip del JDk 17 pero si descargas el instalador será más facil.

### 1.1 Descarga del JDK

1. Accede al sitio oficial de Oracle o a la página de <a href="https://adoptium.net/es/temurin/releases" target="_blank">Adoptium (Eclipse Temurin)</a> 
2. Descarga el archivo **.zip** o el instalador de la versión LTS más reciente (ej. para esta guía  se descargo el .zip del JDK 17 o si los deseas JDK 21)
3. Guarda el archivo en una ubicación accesible

### 1.2 Extracción del archivo ZIP

1. Ubica el archivo descargado (ej. `jdk-17_windows-x64_bin.zip`)
2. Haz clic derecho y selecciona "Extraer aquí" o "Extract All"
3. Mueve la carpeta extraída a una ubicación permanente. Recomendaciones:
   - `C:\Java\`
   - `C:\Program Files\Java\`

**Estructura de carpeta correcta:**
```
C:\Java\jdk-17.0.2\
    ├── bin\
    │   ├── java.exe
    │   └── javac.exe
    ├── lib\
    ├── include\
    └── ...
```

 ⚠️ **Importante:** La carpeta extraída debe contener directamente las subcarpetas `bin`, `lib`, `include`, etc. Evita doble anidación como `C:\Java\jdk-17\jdk-17.0.2\bin\`.

### 1.3 Configuración de variables de entorno

#### Paso 1: Abrir configuración de variables
1. Presiona **Windows + R**
2. Escribe `sysdm.cpl` y presiona Enter
3. Ve a la pestaña **Opciones avanzadas**
4. Haz clic en **Variables de entorno**

#### Paso 2: Crear JAVA_HOME
En **Variables del sistema** (parte inferior):
- **Nombre:** `JAVA_HOME`
- **Valor:** Ruta completa de tu JDK (ej. `C:\Java\jdk-17.0.2`)

#### Paso 3: Modificar Path
1. En **Variables del sistema**, busca `Path`
2. Selecciona y haz clic en **Editar**
3. Agrega una nueva entrada: `%JAVA_HOME%\bin`
4. Si lo prefieres, también puedes agregar la ruta completa: `C:\Java\jdk-17.0.2\bin`
5. **Recomendación:** Mueve esta entrada al inicio de la lista para evitar conflictos

#### Paso 4: (Opcional) Crear CLASSPATH
Solo necesario para aplicaciones antiguas:
- **Nombre:** `CLASSPATH`
- **Valor:** `.;%JAVA_HOME%\lib`

### 1.4 Verificación de la instalación

1. Abre una **nueva** terminal (CMD o PowerShell)
2. Ejecuta los siguientes comandos:
   ```cmd
   java -version
   javac -version
   ```

**Salida esperada:**
```
java version "17.0.2" 2022-01-18 LTS
javac 17.0.2
```

### 1.5 Solución de problemas comunes

| Problema | Solución |
|----------|----------|
| `'java' no se reconoce` | Cerrar y abrir nueva terminal. Verificar que `%JAVA_HOME%\bin` esté en Path |
| Versión incorrecta | Mover `%JAVA_HOME%\bin` al inicio del Path |
| `javac` no funciona | Confirmar que el ZIP contiene el JDK completo, no solo JRE |
| Ruta con espacios | Usar comillas o el formato corto (ej. `PROGRA~1`) |

### 1.6 Método rápido con PowerShell

Ejecuta como administrador:

```powershell
# Definir ruta (cambiar según tu instalación)
$jdkPath = "C:\Java\jdk-17.0.2"

# Crear JAVA_HOME
[Environment]::SetEnvironmentVariable("JAVA_HOME", $jdkPath, "Machine")

# Agregar al Path
$oldPath = [Environment]::GetEnvironmentVariable("Path", "Machine")
$newPath = "$jdkPath\bin;$oldPath"
[Environment]::SetEnvironmentVariable("Path", $newPath, "Machine")
```

**Reinicia** la terminal para aplicar los cambios.


## Parte 2: Instalación y configuración de Android Studio Narwhal 3

### 2.1 Instalación de Android Studio

#### Descarga
1. Visita la página oficial de <a href=" https://developer.android.com/studio?hl=es-419" target="_blank">desarrolladores de Android</a>
2. Descarga el instalador de **Android Studio Narwhal 3** para Windows
3. Guarda el archivo ejecutable

#### Proceso de instalación
1. Ejecuta el instalador descargado
2. Sigue el asistente de instalación
3. **Recomendación:** Usa las opciones predeterminadas en la mayoría de los pasos
4. Selecciona los componentes a instalar (SDK, emulador, etc.)
5. Elige la ruta de instalación (ej. `C:\Program Files\Android\Android Studio`)

**Nota:** No es necesario configurar `JAVA_HOME` manualmente para Android Studio, ya que detectará automáticamente la instalación del JDK configurada en la Parte 1.

### 2.2 Ubicación del SDK en Android Studio Narwhal 3

En Narwhal 3, la configuración del SDK se encuentra en:
1. Abre Android Studio
2. Ve a **File > Settings** (o **Ctrl + Alt + S**)
3. Navega a **Languages & Frameworks > Android SDK**
   > (Esta ubicación reemplaza la ruta antigua `Appearance & Behavior > System Settings > Android SDK`)

4. En la parte superior verás la **ruta del SDK de Android**
   - Ruta por defecto: `C:\Users\TU_USUARIO\AppData\Local\Android\Sdk`
   - Copia esta ruta para el siguiente paso

### 2.3 Configuración de variables de entorno para Android

#### Paso 1: Crear ANDROID_HOME
En **Variables del sistema** (misma ventana que usaste para Java):
- **Nombre:** `ANDROID_HOME`
- **Valor:** Ruta del SDK que copiaste (ej. `C:\Users\TU_USUARIO\AppData\Local\Android\Sdk`)

#### Paso 2: Modificar Path
En la variable `Path`, agrega las siguientes rutas:
```
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
```

**Orden recomendado:**
1. `%JAVA_HOME%\bin` (de la Parte 1)
2. `%ANDROID_HOME%\platform-tools`
3. `%ANDROID_HOME%\tools`
4. `%ANDROID_HOME%\tools\bin`

### 2.4 Verificación de la configuración de Android

1. Abre una **nueva** terminal
2. Verifica `ANDROID_HOME`:
   ```cmd
   echo %ANDROID_HOME%
   ```
   Debe mostrar la ruta configurada

3. Verifica `adb` (Android Debug Bridge):
   ```cmd
   adb version
   ```
   Salida esperada: versión de Android Debug Bridge

4. Verifica otras herramientas:
   ```cmd
   emulator -version
   sdkmanager --version
   ```

### 2.5 Variables adicionales (opcionales)

| Variable | Propósito |
|----------|-----------|
| `STUDIO_JDK` | Forzar a Android Studio a usar un JDK específico |
| `STUDIO_GRADLE_JDK` | Especificar JDK para procesos de Gradle |
| `GRADLE_HOME` | Si usas Gradle independiente |

### 2.6 Configuración de proyectos en Narwhal 3

#### Requisitos de compatibilidad
- **Android Gradle Plugin (AGP):** Versión 8.13.0 o superior
- **Gradle:** Versión compatible con AGP 8.13.0
- **JDK:** JDK 17 o superior (recomendado)

#### Crear un nuevo proyecto
1. Abre Android Studio
2. Selecciona "New Project"
3. Elige una plantilla (ej. "Empty Views Activity")
4. Configura:
   - **Name:** Nombre de tu aplicación
   - **Package name:** Identificador único
   - **Save location:** Ruta del proyecto
   - **Language:** Java o Kotlin
   - **Minimum SDK:** Versión mínima de Android

#### Configurar JDK del proyecto
1. Ve a **File > Project Structure** (o **Ctrl + Alt + Shift + S**)
2. En **SDK Location**:
   - **JDK location:** Verifica que apunte a tu JDK
   - **Android SDK location:** Ruta del SDK
3. En **Modules > Dependencies**:
   - Confirma que el **Module SDK** sea tu JDK

### 2.7 Resumen de variables configuradas

| Variable | Valor (ejemplo) | Propósito |
|----------|-----------------|-----------|
| `JAVA_HOME` | `C:\Java\jdk-17.0.2` | Ruta del JDK |
| `ANDROID_HOME` | `C:\Users\Usuario\AppData\Local\Android\Sdk` | Ruta del SDK Android |
| `Path` | `%JAVA_HOME%\bin;%ANDROID_HOME%\platform-tools;...` | Ejecutar herramientas desde terminal |

---

## Verificación final del entorno

Ejecuta estos comandos en una terminal nueva para confirmar que todo funciona:

```cmd
# Verificar Java
java -version
javac -version

# Verificar Android
echo %ANDROID_HOME%
adb version

# Verificar variables
echo %JAVA_HOME%
echo %ANDROID_HOME%
echo %Path%
```

## Solución de problemas comunes con Android

| Problema | Solución |
|----------|----------|
| `adb` no reconocido | Verificar que `%ANDROID_HOME%\platform-tools` esté en Path |
| Error de JDK en Android Studio | Configurar JDK en **File > Project Structure > SDK Location** |
| SDK no encontrado | Revisar ruta en **Languages & Frameworks > Android SDK** |
| Gradle sync falla | Verificar versión de AGP y JDK, limpiar caché (File > Invalidate Caches) |

 