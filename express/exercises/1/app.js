const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { title } = require('process');
const model = require('./models/schema');


const app = express();
//setting the port for implicitly created server
app.listen(3000, ()=>{
    console.log('server is running on port 3000...');
});
// setting the view engine 
app.set('view engine', 'ejs');
// setting the middlewares
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true}));
//setting connection with the mongoDB
const path = 'mongodb+srv://wonder:ilovethelorld@cluster0.q0jitjr.mongodb.net/academy';
mongoose.connect(path).then(result=>{
    console.log("Well connected to MongoDB");
}).catch(err=>{
    console.log("failed to connect to mongo due to:"+err);
});
//handling the "POST" requests
app.post('/students', (req, res)=>{
    const newStudent = new model(req.body);
    newStudent.save().then(result=>{
        console.log("data sent");
        res.redirect('/students');

    }).catch(err=>{
        console.log('could not send the data because:'+ err);
    });


});
// handling the "GET" requests
app.get('/students', (req, res)=>{
    model.find().sort({ createdAt: -1 }).then(results=>{
        res.render('index', { title: 'HOME', students: results});
    }).catch(err=>{
        console.log('could not fetch the students in DB because:'+ err);
    });
});
// handling "DELETE" requests
app.delete('/students/:id', (req,res)=>{
    const id = req.params.id;
    model.findByIdAndDelete(id).then(results=>{

        res.json({ go:'/'});
        console.log('well deleted');
    }).catch(err =>{
        console.log("it could not delete this doc bcz:"+err);
    });
});
app.get('/students/:id', (req,res)=>{
    const id = req.params.id;
    model.findById(id).then(result=>{
        res.render('details', { title:'details', info:result});
    });
});
app.get('/', (req, res)=>{
    res.redirect('/students');
});
app.get('/about', (req, res)=>{
    res.render('about', { title: 'ABOUT'});

});
app.get('/addStudent', (req, res)=>{
    res.render('addStudent', { title: 'ADD'});

});
app.use((req, res)=>{
    res.render('404', { title: 'NotFound'});
});


