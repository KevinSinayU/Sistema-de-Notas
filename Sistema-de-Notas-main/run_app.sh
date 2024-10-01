#!/bin/bash

#prompt for MySQL database credentials
read -p "Enter MySQL database username: " DB_USER
read -s -p "Enter MySQL database password: " DB_PASSWORD
echo
read -p "Enter MySQL database namee: " DB_NAME

#Run MySQL setup
echo "Setting up  MySQL database schema..."
mysql -u $DB_USER -p$DB_PASSWORD -e "CREATE DATABASE IF NOT EXIST $DB_NAME;"

#Prompt for paths to Spring Boot and React apps
read -p "Enter path to Spring Boot app: " SPRING_BOOT_PATH
read -p "Enter path to React app: " REACT_PATH

APPLICATION_PROPERTIES_PATH="$SPRING_BOOT_PATH/src/main/resources/application.properties"

#Configure Spring Boot application properties 
echo "Configuring Spring Boot application properties..."
cp "$APPLICATION_PROPERTIES_PATH" "$APPLICATION_PROPERTIES_PATH.bak" #backup original file
sed -i "s/spring.datasource.username=your_username/spring.datasource.username=$DB_USER/" "$APPLICATION_PROPERTIES_PATH"
sed -i "s/spring.datasource.password=your_password/spring.datasource.username=$DB_PASSWORD/" "$APPLICATION_PROPERTIES_PATH"
sed -i "s/spring.datasource.url=jdbc:mysql\/\/localhost:3306\/your_db/spring.datasource.url=jdbc:mysql\/\/localhost:3306\/$DB_NAME/" "$APPLICATION_PROPERTIES_PATH"

#Run Sprin Boot with DB migration
echo "Starting Spring Boot..."
cd "$SPRING_BOOT_PATH"
./mvnw clean install
./mvnw spring-boot:run &


#Wait for backend to start
sleep 10

#Run React
echo "Starting React..."
cd "$REACT_PATH"
npm install
npm start

#Exit the apps
echo "Stopping Spring Boot..."
pkill -f "spring-boot"

echo "Stopping React..."
pkill -f "react-scripts"

echo "Apps stopped successfully"
