# Library System API
A library system with API for add and search books inside the database with NodeJs
## Install & Run
First of all you need to download the files or clone the repository inside a folder. After that open the folder in terminal and write
```sh
npm install
```
You need to create the database. For database we use sqlite3 so write on terminal
```sh
sqlite3 books.db
```
Then copy the text from the schema.txt and paste it on terminal
```sh
Enter ".help" for usage hints.
sqlite> CREATE TABLE `books` (
   ...> `id` INTeger NOT NULL  PRIMARY KEY AUTOINCREMENT ,
   ...> `author` VARCHAR( 25 ) NOT NULL ,
   ...> `title` VARCHAR( 40 ) NOT NULL ,
   ...> `genre` VARCHAR( 20 ) NOT NULL ,
   ...> `price` FLOAT NOT NULL);
```
Typed
```sh
.quit
```
And run the project with
```sh
//For Linux
nodejs app.js

//For Windows
node app.js
```

Enjoy!
