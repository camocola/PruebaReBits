# Sistema de Gestión de Vehículos - Prueba Técnica

Este proyecto es una solución integral para la **Mantención de Vehículos** y **Gestión de Propietarios**, diseñada para rastrear el historial de dominios de forma cronológica. Construido con **Laravel 11**, **Vue 3 (Inertia.js)** y **SQLite**.

---

##  Requisitos del Sistema

* **PHP**: 8.2 o superior (con extensión `php-sqlite3` habilitada).
* **Composer**: Para la gestión de dependencias de backend.
* **Node.js & NPM**: Para la compilación de assets del frontend.
* **Base de Datos**: SQLite.

---

## Instalación y Configuración

Siga estos pasos para desplegar el proyecto en su entorno local:

1. **Clonar repositorio e Instalar dependencias:**
    ```bash
    git clone https://github.com/camocola/PruebaReBits
    composer install
    npm install

2. Configurar variables de entorno.
    ```
    cp .env.example .env
    php artisan key:generate
    ```   
3. Base de Datos (SQLite): Cree el archivo de base de datos manualmente y ejecute las migraciones.
    ```
    New-Item -ItemType File database/database.sqlite
    php artisan migrate
    ```  
4. Configuración de Correo: Para recibir los reportes en su correo, configure su SMTP en el .env.
    ```
    MAIL_MAILER=smtp
    MAIL_HOST=smtp.gmail.com
    MAIL_PORT=465
    MAIL_USERNAME=su-correo@gmail.com
    MAIL_PASSWORD=su-contrasena-de-aplicacion
    MAIL_ENCRYPTION=tls
    ``` 
5. Lanzar el Proyecto: Ejecute ambos comandos en terminales diferentes:
    ```
    php artisan serve
    npm run dev
    ```  

# Guía para Validación de la Prueba
Debe registrarse en http://127.0.0.1:8000/register. La base de datos ha sido adaptada para soportar tanto la columna name (requerida por Laravel) como nombre y apellidos (requeridas por el Excel).

1. Importación Excel
Archivo: Utilice el archivo prueba.xlsx ubicado en la raíz de este repositorio.
Acción: Suba dicho archivo desde la sección "Importación de datos".
Validación: El sistema usa firstOrCreate para evitar duplicados.
Resultado: El sistema evitará duplicados de patentes y enviará un correo automático de confirmación a su gmail.

2. Historial de Propietarios 
Acción: Haga clic en el botón "Historial" de cualquier vehículo en la tabla principal.
Orden: El dueño actual aparece primero como "Actual", ordenado por fecha de adquisición (descendente).

3. Validaciones de Seguridad
Patentes Únicas: Intente registrar manualmente un vehículo con una patente ya registrada. El sistema mostrará un mensaje de validación: "Esa patente ya está registrada en el sistema", en lugar de caerse por error de base de datos.

# Estructura del Excel de Prueba
El archivo procesado tiene el siguiente orden de columnas: | A | B | C | D | E | F | G | H | |---|---|---|---|---|---|---|---| | Nombre | Apellidos | Correo | Marca | Modelo | Patente | Año | Precio |