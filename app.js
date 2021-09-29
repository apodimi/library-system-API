const express = require('express');
const app = express();
const parser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const db =  new sqlite3.Database('./books.db')

app.use(cors());
app.use(parser.json());

app.get('/book/:keyword', (req, res)=>{
    const param = req.params.keyword;
    const q =`SELECT * FROM books WHERE title LIKE "%${param}%"`;
    db.all(q,  (err,result)=>{
        if (err){
            console.log(err);
        }else{
            res.send(JSON.stringify(result));
        }
        
    })
    
})

app.post('/book/',  function(req, res){
    console.log(req.body);
    const newBook = req.body;
    const query = `INSERT INTO books(author,title,genre,price) VALUES("${newBook.author}","${newBook.title}","${newBook.genre}",${newBook.price})`;
    db.run(query, (err)=>{
        if (err) {
            res.end("Something went wrong.Plese try again!");
        }else {
            res.end("The book added successfully");
        }
    })
})


app.listen(3000);
