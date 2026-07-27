const express= require('express');
const route= express();
const Blog = require('../models/schema');

route.get('/blogs', (req,res)=>{
    Blog.find().sort({ createdAt: -1 }).then((results)=>{
        res.render('index', { tittle:'All-Blogs', blogs: results});
    }).catch((err)=>{
        console.log(err);
    });
});
route.post('/schemaa', (req, res)=>{
    const blog= new Blog(req.body);
    blog.save().then((result)=>{
        res.redirect('/');
    }).catch((err)=>{
        console.log(err);
    })
});

route.delete('/schemaa/:id', (req, res)=>{
    const id= req.params.id;

    Blog.findByIdAndDelete(id).then((response)=>{
        res.json({ redirect: '/'});
    }).catch(err=>{
        console.log(err);
    });
});

route.get('/schemaa/:ide', (req, res)=>{
    const id= req.params.ide;
    
    Blog.findById(id).then(result=>{
        res.render('details', { blog:result, tittle: 'Blog in DB'});
    })

});

module.exports = route;