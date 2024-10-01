<h1 align="center"> NOTES APP CHALLENGE </h1>
<p>This is a simple notes web app made with Spring Boot and React. It connects to a MySQL database and uses Spring Data JPA for persistance.</p>
<p>This app was made for the challenge of Ensolvers.</p>

## 🔨 Project funcionalities
- `Show notes`:  The application allows you to view all notes. It also allows you to view archived and active notes.
- `CRUD operations with notes`: In addition to being able to view the notes, the application allows you to add new notes, as well as edit and delete them.
- `Tag notes`: The application allows you to classify your notes by putting labels on them.
- `Filter notes`: The application allows you to filter notes according to categories. It also allows you to filter them according to whether they are active or archived

## 💻Tecnologies used 

- `Spring Boot`
- `Spring Data JPA`
- `React`
- `MySQL`

## 💾Important versions for executing the application
- `Node`:20.11.0
- `Npm`:10.2.5
- `Jdk`:21

## 🛠️ IMPORTANT info for executing the application
<p>On this repository there is a bash script for excecuting the app. When executing this script, is going to ask you some information such as:</p>

- `Your MySQL database user and password`: to change the application properties.
- `Your MySQL database name`: if the database does not exist it will create it.
- `The path to the Spring Boot and React files`: to run the application.
  
To run the script, first navigate to the directory where you saved the script. Then make sure that you have the execute permission for the script by running **chmod +x run_app.sh**. Finally execute the script using the command **./run_app.sh**
  
However, you can manually run the application, just be sure to change the following things on the **application.properties** file, wich is located on the Backend folder, on **src/main/resources**: 

- `spring.datasource.url=jdbc:mysql://localhost:3306/your_db`: change your_db to the name of your existing database.
- `spring.datasource.username=your_username`:change your_username to your mySQL username.
- `spring.datasource.password=your_password`: change your_password to your mySQL password.

<p>Once you changed this things, you can execute the app. First make sure that your DATABASE server is on. Then run the Spring Boot application, you can run it for example on an IDE as IntellijIDEA. Finally, you can run the React app by using the command npm start on the react directory.</p>


