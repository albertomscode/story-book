Story Book

Story Book es una aplicación creada para aquellos que desean compartir y escribir sus historias, anécdotas, relatos cortos, o cualquier cosa que los inspire. Esta plataforma permite a los usuarios crear su perfil y empezar a narrar su historia en un entorno simple y amigable.

🚀 Características

    Los usuarios pueden registrarse e iniciar sesión a través de Clerk, un sistema de autenticación que simplifica el manejo de usuarios.
    Cada usuario tiene la capacidad de crear su propio perfil, con la opción de personalizar su nombre de usuario y añadir una breve biografía.
    Los usuarios pueden escribir y publicar historias en la plataforma, creando un espacio único de inspiración colectiva.

🛠️ Tecnologías Utilizadas

    React y Next.js: Para la construcción de la interfaz de usuario y el manejo del enrutamiento.
    PostgreSQL (a través de Vercel): Utilizado para gestionar la base de datos, donde se almacenan los perfiles y las historias.
    Clerk: Utilizado para la autenticación de usuarios (sign-in, sign-up).
    CSS Global: Para el manejo de los estilos de la aplicación.

📂 Estructura del Proyecto

    - posts/[postid]: Aquí se gestionan las publicaciones de los usuarios y sus comentarios.
    - sign-in / sign-up: Estas rutas gestionan el proceso de autenticación de los usuarios a través de Clerk.
    - components/CreateProfile.js: Este componente permite a los usuarios crear y editar sus perfiles personales.
    - user/page.js: La página donde se visualizan los detalles del perfil de cada usuario.

🌐 Base de Datos

La base de datos fue creada utilizando PostgreSQL alojada en Vercel. Los comandos para la creación de tablas se encuentran en el archivo seed.txt. A continuación, un ejemplo de cómo se crea la tabla de perfiles:

CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    clerk_user_id text,
    username text,
    bio text
);

Este archivo contiene todos los scripts SQL necesarios para configurar la base de datos y garantizar el correcto almacenamiento de la información de los usuarios y sus historias.

⚙️ Instrucciones para Ejecutar el Proyecto

    Clona este repositorio en tu máquina local:

        git clone https://github.com/albertomscode/story-book.git

    Instala las dependencias necesarias:

        npm install

    Inicia la aplicación en modo desarrollo:

        npm run dev

    Accede a la aplicación en tu navegador visitando http://localhost:3000.

🧑‍💻 Autenticación con Clerk

    El proyecto utiliza Clerk para gestionar la autenticación de usuarios. Clerk proporciona una interfaz fácil de usar para que los usuarios se registren, inicien sesión y gestionen su cuenta sin complicaciones.

    Actualmente, se está trabajando en mejorar la interfaz de la página web, con un enfoque especial en la sección de sign-in, para garantizar una experiencia más intuitiva y fluida para los usuarios al momento de autenticarse.

👤 Creación de Perfiles

    El componente CreateProfile.js permite a cada usuario crear un perfil único, personalizando su nombre de usuario y añadiendo una biografía. Esta funcionalidad es clave en la experiencia del usuario, ya que les permite dejar una huella personal antes de comenzar a compartir sus historias.

🎨 Estilos

    El proyecto utiliza CSS global para gestionar los estilos de la aplicación. Esto asegura una apariencia consistente y limpia en todas las páginas de la plataforma.