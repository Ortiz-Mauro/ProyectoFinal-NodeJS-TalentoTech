# 🛒 E-Commerce API REST 🚀

Una API REST robusta, segura y escalable diseñada para la gestión de catálogo de productos y autenticación de usuarios en una tienda en línea. Desplegada en la nube mediante Vercel.

---

## 🛠️ Stack Tecnológico

| Tecnología | Responsabilidad en el Sistema |
| :--- | :--- |
| **Node.js** | Entorno de ejecución asíncrono del lado del servidor. |
| **Express.js** | Framework web para enrutamiento y middlewares. |
| **Firebase / Firestore** | Base de datos NoSQL en la nube para persistencia de datos. |
| **JWT (JSON Web Tokens)**| Criptografía para autenticación y autorización de rutas. |
| **Vercel** | Plataforma de hosting serverless para el despliegue a producción. |

---

## 📐 Diseño Arquitectónico y Metodologías

Este desarrollo fue concebido bajo estándares de arquitectura limpia y diseño RESTful, separando la aplicación en capas (Rutas, Controladores, Servicios y Modelos) priorizando:

*   🎯 **Alta Cohesión:** Cada capa tiene una única responsabilidad bien definida. Los Controladores gestionan el flujo HTTP, los Servicios encapsulan la lógica de negocio, y los Modelos se encargan exclusivamente de la comunicación con Firestore.
*   🔗 **Bajo Acoplamiento:** Los módulos son independientes. El sistema de rutas ignora por completo de dónde provienen los datos, lo que permitiría el día de mañana migrar la base de datos sin romper la aplicación.
*   🧩 **Modularidad:** Implementación de `Express Router` y separación física de archivos lógicos. Esto facilita la organización, el mantenimiento del código y la escalabilidad del proyecto, evitando la aglomeración de código en un solo archivo principal.

---

## 💻 Ejecución Local (Entorno de Desarrollo)

Si deseas probar esta API en tu propia computadora sigue estos pasos:

1. **Clonar el repositorio:** Descarga este código en tu máquina local.
2. **Instalar dependencias:** Abre la terminal en la raíz del proyecto y ejecuta el comando `npm install` para instalar Express, Firebase, JWT, etc.
3. **Variables de Entorno:** Crea un archivo llamado `.env` en la raíz del proyecto y configura tus credenciales privadas (secreta de JWT, claves de acceso a Firebase).
4. **Encender el servidor:** Ejecuta el comando `npm run start`. Verás un mensaje en la consola indicando que el servidor está corriendo en el puerto 3000.
5. **Pruebas Locales:** A partir de este momento, puedes seguir la Mini-Guía de pruebas de abajo, reemplazando la URL pública de Vercel por `http://localhost:3000`.

---

## 🧪 Mini-Guía de Pruebas (Uso Rápido con Vercel)

Para consumir esta API de forma pública usando clientes como **Postman** o **ThunderClient**, sigue estos pasos:

**1. Obtener el Pase (Login)**
*   **Método:** `POST`
*   **URL:** `https://proyecto-final-node-js-talento-tech-beta.vercel.app/auth/login`
*   **Body (JSON):**
    ```json
    {
        "email": "123@123.com",
        "password": "1234"
    }
    ```
*   *Acción:* Copia el larguísimo `token` que te devolverá el servidor.

**2. Consumir una Ruta Protegida (Ej: Traer Productos)**
*   **Método:** `GET`
*   **URL:** `https://proyecto-final-node-js-talento-tech-beta.vercel.app/api/products`
*   **Headers:** Ve a la pestaña de Headers y agrega una nueva clave llamada `Authorization`. En el valor, escribe `Bearer ` seguido del token que copiaste en el paso anterior.
*   *Acción:* Al enviar la petición, el Middleware validará tu acceso y te devolverá el catálogo desde Firestore.

---

## 🔮 Próximos Pasos (Mejoras Futuras)

El aprendizaje continuo es clave en la ingeniería de software. Las siguientes tecnologías están planificadas para las próximas iteraciones del proyecto:

*   ⚛️ **Frontend con React (Full-Stack):** Desarrollo de una interfaz de usuario interactiva (SPA) utilizando React.js y su ecosistema. Esta aplicación cliente consumirá los endpoints de esta API para mostrar el catálogo y gestionar la tienda desde el navegador.
*   🐳 **Docker:** Contenerización de la aplicación para garantizar que funcione exactamente igual en cualquier entorno.
*   📖 **Documentación Interactiva:** Implementación de herramientas como *Swagger* o *Redocly* para autogenerar la documentación de la API.
*   🧪 **Testing Automático:** Integración de pruebas unitarias y de integración utilizando librerías como *Jest* o *Mocha*.
*   🟦 **TypeScript:** Migración del código para agregar tipado estático y reducir errores en tiempo de desarrollo.