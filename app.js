const express= require('express');
const morgan =require('morgan');
const mongoose= require('mongoose');
const { result } = require('lodash');
const Blog = require('./models/schema');
const route = require('./routes/blogRoutes');
require('dotenv').config();



const app= express();
mongoose.connect(process.env.DB_URL).then((result)=>{
    app.listen(process.env.PORT,()=>{
        console.log('running property...');
    });
}).catch((err)=>{
    console.log(err);
});

app.set('view engine', 'ejs');

// middleware and static files.
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

// app.get('/', (req, res)=>{
    
//     const blogs = [
//         {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//         {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//         {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
//       ];
//       res.render('index', { tittle: 'Home', blogs });

// });

app.get('/', (req, res)=>{
    res.redirect('/blogs');

});
 





// app.get('/all-blogs', (req, res)=>{
//     Blog.find().then((result)=>{
//         res.send(result);
//     }).catch((err)=>{
//         console.log(err);
//     });
// });

app.get('/about', (req, res)=>{
    
    res.render('about', {tittle:'About'});

});
app.get('/services', (req, res)=>{
    
    res.render('services', { tittle:'Create a Blog'});

});

app.use(route);

app.use((req,res)=>{
    res.render('404', { tittle:'404'});
});




