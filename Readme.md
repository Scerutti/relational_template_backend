# Template Relational Back-end

Breve descripción del proyecto.

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- Node.js (versión X.X.X)
- PostgreSQL (versión X.X.X)

## Configuración del Proyecto

1. Clona el repositorio:
 ```git clone https://github.com/tu_usuario/tu_repositorio.git```

2. Navega al directorio del proyecto: ```cd relational_backend```


3. Instala las dependencias: ```npm install```


4. Crea los archivos de configuración de entorno:

Crea el archivos `.env` en la raíz del proyecto. Este archivo contendrá las variables de entorno para cada entorno (desarrollo, pruebas y producción). Ejemplo:

```
NODE_ENV=development
DB_USERNAME=tu_usuario_dev
DB_PASSWORD=tu_contraseña_dev
DB_NAME=nombre_de_la_db_dev
```

5. Crea la base de datos:

Asegúrate de que PostgreSQL esté en funcionamiento y crea las bases de datos correspondientes (desarrollo, pruebas y producción) utilizando los nombres definidos en los archivos `.env`.

6. Migraciones de la base de datos:

Ejecuta las migraciones para crear las tablas en la base de datos:

```npm run dev```


El servidor estará disponible en http://localhost:4001.

## Uso del Proyecto

Describe cómo utilizar el proyecto y las rutas disponibles.

## Contribución

Si deseas contribuir al proyecto, sigue los siguientes pasos:

1. Crea una nueva rama: ```git checkout -b nueva-funcionalidad```

2. Realiza tus cambios y mejoras.

3. Haz commit de tus cambios: ```git commit -m "Descripción de los cambios"```

4. Sube la rama a GitHub: ```git push origin nueva-funcionalidad```

5. Crea una solicitud de extracción en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
