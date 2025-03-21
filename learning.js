// node craashcourse
// meaning of nodeJs
           /*Node.js is an open-source and cross-platform JavaScript runtime environment.
           It is a popular tool for almost any kind of project! Node.js runs the V8 JavaScript
           engine, the core of Google Chrome, outside of the browser.
           This allows Node.js to be very performant.*/
           
//   this is what module is
              /*Module in Node. js is a simple or complex functionality
              organized in single or multiple JavaScript files which can
              be reused throughout the Node.*/

            //   we usually export modules from and to dff files to use their dff functionalities as they can make our codes more reusable.
            // the following is a simple example showing how to export and import modules from modules.js to module2.js

            /*module.js:  
            const employees= ["Nkurunziza", "Etienne", "Wonder"];
            const salaries= [400000, 800000, 2800000];
            
            module.exports= {
                employees,salaries
            }
            module2.js:
            employees.forEach((emp, index) => {
                salaries.forEach((sal, indexx) =>{
                    if(indexx=== index){
                        console.log("His name is:"+emp+". his salary is:"+sal);
            
                    }
            
                })
                
            });
            */
// built in modules 
            //  let's take example on OS module that gives us object containing infornmation to the current operating system.
            /*const operatingSystem = require('os');
            console.log(operatingSystem.platform(), operatingSystem.homedir());*/

            //another is file system."FS"

            // reading files

            /*const wonder= require('fs');
            wonder.readFile("./data.txt", (err, data)=>{
                if(err){
                    console.error(err);

                 }
                 console.log(data.toString());}


                );*/
            // writting files
             
            /*we use a method "writeFile()" that takes 3 arguments
              1. filepath,
              2. text we'd like to write,
              3. bcz it's asychronous js we have a function. now it is not goin' to Have err and data. bcz it runs no matter How. no err, only data.
                 it is goin' to be just a function with no argument at all.*/
              
            /*const wonder=require("fs");
            wonder.writeFile("./data/data1.txt", "hello wonder loves you.", ()=>{
                console.log("successfully written");
            });*/


            /*creating and deleting directories or folders:
              1. mkdir(). which is async function that takes 2 parameters. 
                     1.1. directoryPath.
                     1.2. (err) in this case no data. only err can happen and no expected returned data
              2. rmdir(). asych function that takes 2 parameters as WEBGL_lose_context
                     2.1. directoryPath
                     2.2. (err) in this case no data. only err can happen and no expected returned data*/

             /*const wonder= require("fs");
             wonder.mkdir("./data", (err)=>{
                if(err){
                    console.log(err);

                }

                console.log("created scuccessfully");
             })*/

            // deleting files: we use unlink()
            /*it has 2 parameters:
               1. filepath+name
               2. (err) that will help us output the error if occured.*/

               /*const wonder= require('fs');
               wonder.unlink("./data.txt", (err)=>{
                if(err){
                    console.log(err);

                }
                console.log("deleted!!");
               });*/

               // checking if file or folder exists. we use existSync()
               
               /*const wonder= require('fs');
               if(wonder.existsSync("./data")){
                console.log("ndahari");
               }
               else{
                console.log("simpari");
               }*/
            
/*when we're working with huge data files, we use streaming tech to make it through. 
when we're whatching a vid on youtube it doesn't come fully at once. it's loaded a small chunk at a time.
this tech is called"streaming.". we can readstream or createStrem.*/

             /*const fs= require('fs');
             const data= fs.createReadStream("./data.txt",{ encoding: 'utf8' });
             const writedata= fs.createWriteStream("./data1.txt");


            //  const data= fs.createReadStream("./data.txt",{ encoding: 'utf8' });// this method can have 2 parameters for which the 2nd is optional. 
                                                    /*1. filepath
                                                    2. {encoding : utf8} which sets whatever data fetched into a readable format.*/
            /*data.on("data", (chunk)=>{ 
                console.log("___new chunk__")                    /*by "on" we're adding an event listener, that listens whenever a chunk of data comes and log it out.*?
                writedata.write(chunk);
            }); 
            */

            // we can also stream data in just a single using "pipe()".

            /*const streamdata= require('fs');

            const data= streamdata.createReadStream("./data.txt");
            const writedata= streamdata.createWriteStream("./data1.txt");

            data.pipe(writedata);*/


// CREATING AND SETTING A SERVER MANNUALLY USING Node.JS
// lesson #4: Node.js Crash Course Tutorial #4 - Requests & Responses

                                /*const http= require('http');
                                const fs=require('fs');

                                const server= http.createServer((req, res)=>{
                                    let path='./views/';
                                    switch(req.url){
                                        case '/':
                                            path += 'index.html';
                                            res.statusCode = 200;
                                            break;
                                        case '/about':
                                            path += 'about.html';
                                            res.statusCode = 200;
                                            break;
                                        case '/about-me':
                                            res.statusCode = 301;
                                            res.setHeader('Location','/about');
                                            res.end();
                                            break;
                                        default :
                                        path += '404.html';
                                        res.statusCode = 404;
                                        break;       
                                }
                                    res.setHeader('response-type', 'text/html');
                                    fs.readFile(path,(err, data)=>{
                                        if(err){
                                            console.log(err);
                                            res.end();
                                        }else{
                                            res.end(data);
                                        }

                                    });
                                });
                                  

                                server.listen(3000,'localhost', ()=>{
                                    console.log('the server is well listening on port 3000');
                                });*/

                                // important commands

                                // npm install packageName: by this u install a package in ur project
                                // npm install -g packageName: by this u install a package in ur project. this -g will alow the installed package to be used from any other project. it is installed grobally.
                                // npm uninstall packageName: by this u uninstall a package from ur project
// express package
/*Express.js is a minimal and flexible Node.js web application framework that provides
 a robust set of features for building web and mobile applications.
 It facilitates the management of server-side logic, routing, middleware, and HTTP requests and responses. */
 
 //my first express app
                                    /*const wonder= require('express'); // this returns a function.

                                    const app= wonder();// wonder became function.
                                    app.listen(3000);
                                    app.get('/',(req, res)=>{
                                        res.send('<p>heloo guys. my first express application</p>');
                                    });*/

                                    
// DEALING WITH THE DYNAMIC Content USING "VIEW ENGINE"
      // THERE'RE SEVERAL VIEW ENGINGES BUT WE'RE LEARNING THE MOST POPULAR IN 2024 
         // IT IS EMBEDED JAVASCRIPT TEMPLATE(ejs)
           // INSTALL IT FIRST. "npm install ejs" 
           
               // MY FIRST EXPRESS.JS APP USING EJS TO RENDER PAGES
                                            
                                                                    /*<html lang="en">
                                    <%- include("./partials/head.ejs") %>

                                    <body>
                                    <%- include("./partials/nav.ejs") %>

                                    <div class="blogs content">
                                        <h2>All Blogs</h2>

                                        <% if (blogs.length > 0) { %>
                                        <% blogs.forEach(blog => { %>

                                            <h3 class="title"><%= blog.title %></h3>
                                            <p class="snippet"><%= blog.snippet %></p>

                                        <% }) %>
                                        <% } else { %>
                                        <p>There are no blogs to display...</p>
                                        <% } %>
                                        
                                    </div>

                                    <%- include("./partials/footer.ejs") %>
                                    </body>
                                    </html>*/

//using static files like css, images or ...
   // we use "use()" to do this. it done like this. 
       /*const express=  require('express');
               
             const app= express();
             app.use(express.static('public')); // this public is a folder name. that is a folder in which static files are placed. there you can start accessing them.
              // u can now start going into dff and access them. example: u can go in head.ejs file and and this tag <link rer="" href=""> to add css to the head or other pages.
             */

// we've now done sth interesting. Mongo DB. we're adding data in collections using models and models' schema
   // this is a two files to demo that.
      // app.js
        
                               /* const express= require('express');
                            const morgan =require('morgan');
                            const mongoose= require('mongoose');
                            const Blog = require('./models/schema');



                            const app= express();
                            const dburl= 'mongodb+srv://wonder:ilovethelorld@cluster0.q0jitjr.mongodb.net/';
                            mongoose.connect(dburl).then((result)=>{
                                app.listen(3000,()=>{
                                    console.log('running property...');
                                });
                            }).catch((err)=>{
                                console.log(err);
                            });

                            app.set('view engine', 'ejs');

                            // middleware and static files.
                            app.use(express.static('public'));
                            app.use(morgan('dev'));

                            // app.get('/', (req, res)=>{
                                
                            //     const blogs = [
                            //         {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
                            //         {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
                            //         {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
                            //       ];
                            //       res.render('index', { tittle: 'Home', blogs });

                            // });

                            app.get('/', (req,res)=>{
                                // this sorts data createdAt: -1 meaning the LIFO
                                Blog.find().sort({ createdAt: -1}).then((results)=>{
                                    res.render('index', { tittle:'All-Blogs', blogs: results});
                                }).catch((err)=>{
                                    console.log(err);
                                });
                            });

                            app.get('/all-blogs', (req, res)=>{
                                Blog.find().then((result)=>{
                                    res.send(result);
                                }).catch((err)=>{
                                    console.log(err);
                                });
                            });

                            app.get('/about', (req, res)=>{
                                
                                res.render('about', {tittle:'About'});

                            });
                            app.get('/services', (req, res)=>{
                                
                                res.render('services', { tittle:'Create a Blog'});

                            });
                            app.use((req,res)=>{
                                res.render('404', { tittle:'404'});
                            }); */

// the second file which contains model schema and model that has been exported
   // its called "schema.js"
 

                                    /*const mongoose = require('mongoose');

                                    const Schema = mongoose.Schema;
                                    
                                    const blogSchema = new Schema({
                                        title: {
                                            type: String,
                                            required: true
                                        },
                                        snippet: {
                                            type: String,
                                            required: true
                                        },
                                        body: {
                                            type: String,
                                            required: true
                                        }
                                    
                                    }, {timestamps: true});
                                    
                                    const blog = mongoose.model('blog', blogSchema);
                                    module.exports = blog; */
                                    




