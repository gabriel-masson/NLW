//para executar node src/database/bd.js
const Database = require('sqlite-async')
function execute(db){
   // console.log(db)
   //criando as tabelas do banco
    //nesse exec sera colocado os codigo do sqlite
   return db.exec(` 
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );

   `)
}

//esse then(então) vai espear o banco de dado abrir para executar
module.exports = Database.open(__dirname + "/database.sqlite").then(execute)

