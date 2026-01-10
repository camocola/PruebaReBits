# Sistema de Gestión de Vehículos - Prueba Técnica

Este proyecto es una solución integral para la **Mantención de Vehículos** y **Gestión de Propietarios**, diseñada para rastrear el historial de dominios de forma cronológica. Construido con **Laravel 11**, **Vue 3 (Inertia.js)** y **SQLite**.

---

##  Requisitos del Sistema

* **PHP**: 8.2 o superior (con extensión `php-sqlite3` habilitada).
* **Composer**: Para la gestión de dependencias de backend.
* **Node.js & NPM**: Para la compilación de assets del frontend.
* **Base de Datos**: SQLite (incluida localmente).

---

## Instalación y Configuración

Siga estos pasos para desplegar el proyecto en su entorno local:

1. **Clonar repositorio e Instalar dependencias:**
    ```bash
    git clone https://github.com/camocola/PruebaReBits
    composer install
    npm install

2. Configurar variables de entorno: Cree su archivo .env y genere la clave:
    ```
    cp .env.example .env
    php artisan key:generate
    ```   
3. Base de Datos (SQLite): Cree el archivo de base de datos manualmente y ejecute las migraciones:
    ```
    touch database/database.sqlite
    php artisan migrate
    ```  
4. Lanzar el Proyecto: Ejecute ambos comandos en terminales diferentes:
    ```
    php artisan serve
    npm run dev
    ```  

# Guía para Validación de la Prueba
Para validar que los resultados cumplen con los requerimientos solicitados, realice las siguientes acciones:

1. Importación Excel
Acción: Suba el archivo prueba.xlsx desde la sección "Importación de datos" en la vista principal.

Validación Técnica: El sistema utiliza firstOrCreate para procesar los datos. Si sube el mismo archivo añadiendo filas nuevas, el sistema ignorará los vehículos existentes y solo creará los nuevos, evitando errores de duplicidad de patentes.

Notificación: El controlador está preparado para enviar un reporte de éxito o error al correo camifdm9@gmail.com al finalizar el proceso (requiere configuración de SMTP en el .env).

2. Historial de Propietarios (Trazabilidad)
Acción: Haga clic en el botón "Historial" de cualquier vehículo en la tabla principal.

Trazabilidad: Verá la lista de todos los dueños registrados para ese vehículo, incluyendo el original del Excel.

Orden Cronológico: El dueño actual siempre aparece en la primera fila con la etiqueta "Actual", ordenado por fecha de adquisición de forma descendente.

3. Validaciones de Seguridad
Patentes Únicas: Intente registrar manualmente un vehículo con una patente ya registrada. El sistema mostrará un mensaje de validación: "Esa patente ya está registrada en el sistema", en lugar de caerse por error de base de datos.

# Estructura del Excel de Prueba
El archivo procesado tiene el siguiente orden de columnas: | A | B | C | D | E | F | G | H | |---|---|---|---|---|---|---|---| | Nombre | Apellidos | Correo | Marca | Modelo | Patente | Año | Precio |