<h1 align="center"> DESAFÍO DE APLICACIÓN DE NOTAS </h1>
<p>Esta es una aplicación web de notas simple creada con Spring Boot y React. Se conecta a una base de datos MySQL y utiliza Spring Data JPA para la persistencia.</p>
<p>Esta aplicación fue creada para el desafío de los solucionadores.</p>

## 🔨 Funcionalidades del proyecto
- `Mostrar notas`: La aplicación permite visualizar todas las notas. También permite visualizar notas archivadas y activas.
- `Operaciones CRUD con notas`: Además de poder visualizar las notas, la aplicación permite añadir nuevas notas, así como editarlas y eliminarlas.
- `Etiquetar notas`: La aplicación permite clasificar tus notas poniéndoles etiquetas.
- `Filtrar notas`: La aplicación permite filtrar notas según categorías. También te permite filtrarlas según estén activas o archivadas

## 💻Tecnologías utilizadas

- `Spring Boot`
- `Spring Data JPA`
- `React`
- `MySQL`

## 💾Versiones importantes para ejecutar la aplicación
- `Node`:20.11.0
- `Npm`:10.2.5
- `Jdk`:21

## 🛠️ Información IMPORTANTE para ejecutar la aplicación
<p>En este repositorio hay un script bash para ejecutar la aplicación. Al ejecutar este script, te va a pedir algunos datos como:</p>

- `Tu usuario y contraseña de la base de datos MySQL`: para cambiar las propiedades de la aplicación.
- `Tu nombre de la base de datos MySQL`: si la base de datos no existe la creará.
- `La ruta a los archivos de Spring Boot y React`: para ejecutar la aplicación.

Para ejecutar el script, primero navegue hasta el directorio donde guardó el script. Luego asegúrese de tener el permiso de ejecución para el script ejecutando **chmod +x run_app.sh**. Finalmente ejecute el script usando el comando **./run_app.sh**

Sin embargo, puede ejecutar la aplicación manualmente, solo asegúrese de cambiar las siguientes cosas en el archivo **application.properties**, que se encuentra en la carpeta Backend, en **src/main/resources**:

- `spring.datasource.url=jdbc:mysql://localhost:3306/your_db`: cambie your_db por el nombre de su base de datos existente.
- `spring.datasource.username=your_username`: cambie your_username por su nombre de usuario de MySQL.
- `spring.datasource.password=your_password`: cambie your_password por su contraseña de MySQL.

<p>Una vez que haya cambiado estas cosas, puede ejecutar la aplicación. Primero asegúrese de que su servidor de BASE DE DATOS esté encendido. Luego, ejecuta la aplicación Spring Boot. Puedes ejecutarla, por ejemplo, en un IDE como IntellijIDEA. Por último, puedes ejecutar la aplicación React usando el comando npm start en el directorio de React.</p>
