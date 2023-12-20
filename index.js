// const express = require('express');
// const dotenv = require('dotenv').config();
// const cors = require('cors');
// const {mongoose} = require('mongoose')
// const cookieParser = require('cookie-parser')
// const app = express();
// app.use(cors({
//     origin:'https://localhost:8000',
//     credentials:true,
// }))
// app.use(express.json())
// app.use(cookieParser())
// app.use(express.urlencoded({extended:false}))




// app.use('/',require('./routes/auth_routes'))
// const port = 8000;
// app.listen(port,()=> console.log(`server is running on port: ${port}`))


// //databse connection
// mongoose.connect(process.env.MONGO_URL)
// .then(()=>console.log("Mongo Databse Connected"))
// .catch((err)=>console.log('Database not connected',err))

// //middleware

// ********************************************************************

// const express = require('express');
// const dotenv = require('dotenv').config();
// const cors = require('cors');
// const mongoose = require('mongoose'); // Fix the import statement
// const cookieParser = require('cookie-parser');
// const app = express();

// app.use(cors({
//     origin: 'https://localhost:8000',
//     credentials: true,
// }));
// const corsOptions={
//     // origin:"https://frontend-c1ep.onrender.com/",
//     origin:"https://localhost:5173",
//     methods:'GET, POST, PUT, DELETE',
//     credentials:true,
//     allowedHeaders:['Content-Type , Authorization'],

// };
// app.use(cors(corsOptions))

// app.use(express.json());
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: false }));

// app.use('/', require('./routes/auth_routes'));

// const port = 8000;
// app.listen(port, () => console.log(`Server is running on port: ${port}`));

// // Database connection
// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log("Mongo Database Connected"))
//     .catch((err) => console.log('Database not connected', err));





const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv").config()
const bodyParser = require('body-parser');

const app=express();



app.use(cors({
    // origin: 'https://frontend-c1ep.onrender.com',
    origin:"https://localhost:5173",
    credentials: true,
}));



const corsOptions={
    // origin:"https://frontend-c1ep.onrender.com/",
    origin:"https://localhost:5173",
    methods:'GET, POST, PUT, DELETE',
    credentials:true,
    allowedHeaders:['Content-Type , Authorization'],

};
app.use(cors(corsOptions))
app.use(express.json())

app.use('/',require("./routes/auth_routes"))



const port=5000;
app.listen(port,()=>{console.log("server is running")})
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Monogdb Connected");
})
.catch(()=>{
    console.log("failure");
})