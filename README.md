# Hotelinking_

## BACKEND

Para poder correr este repositorio, necesitas tener instalados los siguientes programas:

- **PHP**: [Descargar PHP](https://www.php.net/downloads.php)
- **Composer**: [Descargar Composer](https://getcomposer.org/download/)
- **XAMPP**: [Descargar XAMPP](https://www.apachefriends.org/es/download.html)

Luego, instala Laravel globalmente en la terminal:
composer global require laravel/installer

- **Clonar el Repositorio**:

Abre la terminal y en la carpeta de tu preferencia, ejecuta:

git clone https://github.com/v4leng/Hotelinking_.git

- **Configuración de XAMPP**:

Abre XAMPP y da clic en Start en los módulos MySQL y Apache.
Una vez iniciados, al lado del botón Stop de MySQL, haz clic en Admin para abrir phpMyAdmin.
En phpMyAdmin, crea una nueva base de datos llamada hotelinking2.
Selecciona la base de datos hotelinking2 y ve a la pestaña Importar.
Importa el archivo hotelinking2.sql sin modificar ninguna configuración y haz clic en Importar.

- **Instalar Dependencias y Ejecutar el Servidor**:

- **Navega a la carpeta del backend**:
cd /laravel-backend/


- **Ejecuta la aplicación**: 
php artisan serve


## FRONTEND

- **Navega a la carpeta del frontend**:
cd /next-app/my-app/


- **Instala las dependencias**:
npm install

- **Ejecuta la aplicación**:
npm run dev


