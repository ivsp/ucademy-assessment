# 🚀 Prueba Técnica Ucademy - Documentación del Desarrollo

Este documento describe los pasos seguidos durante el desarrollo de la prueba técnica, incluyendo herramientas utilizadas, estructura del backend y frontend, así como mejoras futuras que se podrían implementar.

---

## 📌 1️⃣ Herramientas Instaladas en la Aplicación

Durante el desarrollo, se han implementado herramientas para **mejorar la calidad del código, automatizar procesos y facilitar el despliegue**. A continuación, se describen las principales herramientas utilizadas:

### 🔹 Control de Calidad del Código

- **Husky**: Sistema de control de commits que previene la subida de código incorrecto ejecutando automáticamente el **linter** y los **tests** antes de cada commit y push a git.
- **ESLint y Prettier**: Linter y formateador para asegurar consistencia en el código.
- **Commitlint**: Verificación de los mensajes de commit para que sigan una convención clara.

### 🔹 CI/CD con GitHub Actions

Se han configurado **GitHub Actions** para ejecutar de forma automática:

- **Los tests del proyecto** en cada **push o PR** hacia la rama principal.
- **El linter**, detectando posibles errores antes de la fusión de código.

### 🔹 Dockerización

- Se ha dockerizado **tanto el frontend como el backend**, permitiendo levantar la aplicación con un solo comando (`docker-compose up --build`).
- Se ha configurado un **volumen persistente para la base de datos** MongoDB.

---

## 📌 2️⃣ Desarrollo del Backend

El backend se ha desarrollado siguiendo una **arquitectura por capas** con separación clara de responsabilidades. Se ha utilizado **MongoDB como base de datos**, alojada en **Mongo Atlas**.

### 🔹 Base de Datos

- Aunque el ejercicio no lo especificaba, se ha creado una **base de datos inicial** en **MongoDB Atlas** e importado datos de prueba.
- La conexión con la base de datos se realiza mediante la **URI definida en el entorno (`MONGO_URI_DB`)**, lo que permite configurarla fácilmente en diferentes entornos.

### 🔹 Arquitectura

Se ha creado un Bounded Context para la aplicación. El AdminBC, que recoge todas las entidades de ese boundend context. Si la aplicación escalase, se crearían nuevos boundend context con las entidades necesarias para cada uno de ellos.
El backend sigue una **arquitectura en capas** basada en **Domain-Driven Design (DDD)**:

1. **📁 Dominio**: Contiene las **entidades y reglas de negocio**.
2. **📁 Aplicación**: Implementa la **lógica de negocio**.
3. **📁 Infraestructura**: Maneja la **persistencia de datos** y la interacción. Pare este caso con MongoDB.

Se ha implementado **CQRS (Command Query Responsibility Segregation)** para **separar las responsabilidades de lectura y escritura**, mejorando la escalabilidad y el rendimiento de la aplicación.

---

## 📌 3️⃣ Desarrollo del Frontend

El frontend sigue la misma **arquitectura modular** que el backend, asegurando **una estructura organizada y mantenible**.

### 🔹 Estructura del Proyecto

- **📁 `app/`**: Contiene los archivos base para **cargar la aplicación** y configurar el enrutamiento.
- **📁 `components/`**: Almacena **componentes reutilizables** que no manejan lógica, solo UI.
- **📁 `Entities/`**: Implementa la lógica de cada entidad (`Students`), separada en:
  - **Dominio**: Modelos y reglas de negocio.
  - **Aplicación**: Hooks y lógica de estado (React Query).
  - **Infraestructura**: Servicios para la comunicación con la API.
- **📁 `Pages/`**: Contiene las páginas de la aplicación. En este caso, **solo se ha desarrollado la página de estudiantes (`StudentsPage`)**.
- **📁 `Utils/`**: Contiene funciones auxiliares como:
  - **`fetchClient.ts`**: Cliente genérico para hacer peticiones HTTP.
  - **`TanstackQueryProvider.tsx`**: Proveedor global de **React Query**.

### 🔹 Enrutamiento

Se ha configurado **React Router** para gestionar la navegación de la aplicación:

- La **página principal** (`/`) redirige a un **componente de bienvenida (`Welcome`)** en lugar de mostrar directamente la lista de estudiantes.
- La **página de estudiantes** (`/alumnos`) muestra la lista y permite interactuar con la API.

---

## 📌 4️⃣ Próximos Pasos o Mejoras Futuras

Aunque el proyecto cumple con los requisitos básicos, hay varias funcionalidades adicionales que podrían implementarse para mejorar la aplicación:

### 🔹 Seguridad y Autenticación

- Implementar **autenticación con JWT** para permitir que los usuarios inicien sesión en la aplicación antes de acceder a los datos.
- Crear **roles de usuario** (`admin`, `profesor`, `estudiante`) con permisos diferenciados.

### 🔹 Almacenamiento de Imágenes

- Integrar **Cloudinary** (o un servicio similar) para almacenar imágenes de perfil de los estudiantes.

### 🔹 Testing

- Implementar **tests unitarios y de integración** en el backend y el frontend.
- Usar **Cypress** para pruebas de extremo a extremo (E2E).

---

## 📌 5️⃣ Cómo Ejecutar el Proyecto

Para levantar toda la aplicación (frontend, backend y base de datos) en **Docker**, usa:

```sh
docker-compose up --build
```

También se puede levantar por separado usando los comandos:

```sh
npm run start:backend
npm run start:frontend

```
