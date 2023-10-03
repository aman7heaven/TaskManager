const express = require('express');
const dotenv = require('dotenv').config();
const connectDb = require('./db/dbConfig');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const {notFound,  errorHandler} = require("./middlewares/errorHandlers");
const path = require('path')

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));

//connecting to the database
connectDb();

//configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Api routes
app.use('/api/v1/tasks', taskRoutes);
app.use('/api/v1/user', userRoutes);

// middlewares
app.use(notFound);
app.use(errorHandler);

// starting the web server
app.listen(process.env.PORT, ()=>{
    console.log(`Server started on PORT ${process.env.PORT}`);
})