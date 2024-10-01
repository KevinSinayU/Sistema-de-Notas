#!/bin/bash

#solicitud de credenciales de la base de datos MySQL
read -p "Ingrese el nombre de usuario de la base de datos MySQL: " DB_USER
read -s -p "Ingrese la contraseña de la base de datos MySQL: " DB_PASSWORD
echo
read -p "Ingrese el nombre de la base de datos MySQL: " DB_NAME

#Ejecute la configuración de MySQL
echo "Configurando el esquema de la base de datos MySQL..."
mysql -u $DB_USER -p$DB_PASSWORD -e "CREAR BASE DE DATOS SI NO EXISTE $DB_NAME;"

#Solicitar rutas a las aplicaciones Spring Boot y React
read -p "Ingresar ruta a la aplicación Spring Boot: " SPRING_BOOT_PATH
read -p "Ingresar ruta a la aplicación React: " REACT_PATH

APPLICATION_PROPERTIES_PATH="$SPRING_BOOT_PATH/src/main/resources/application.properties"

#Configurar propiedades de la aplicación Spring Boot
echo "Configurando propiedades de la aplicación Spring Boot..."
cp "$APPLICATION_PROPERTIES_PATH" "$APPLICATION_PROPERTIES_PATH.bak" #Realizar copia de seguridad del archivo original
sed -i "s/spring.datasource.username=your_username/spring.datasource.username=$DB_USER/" "$APPLICATION_PROPERTIES_PATH"
sed -i "s/spring.datasource.password=su_contraseña/spring.datasource.username=$DB_PASSWORD/" "$APPLICATION_PROPERTIES_PATH"
sed -i "s/spring.datasource.url=jdbc:mysql\/\/localhost:3306\/su_base_de_datos/spring.datasource.url=jdbc:mysql\/\/localhost:3306\/$DB_NAME/" "$APPLICATION_PROPERTIES_PATH"

#Ejecutar Spring Boot con migración de base de datos
echo "Iniciando Spring Boot..."
cd "$SPRING_BOOT_PATH"
./mvnw clean install
./mvnw spring-boot:run &

#Esperar a que se inicie el backend
sleep 10

#Ejecutar React
echo "Iniciando React..."
cd "$REACT_PATH"
npm install
npm start

#Salir las aplicaciones
echo "Deteniendo Spring Boot..."
pkill -f "spring-boot"

echo "Deteniendo React..."
pkill -f "react-scripts"

echo "Las aplicaciones se detuvieron correctamente"
