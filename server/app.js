const express = require('express');
const morgan = require('morgan');
const app=express();
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const taskRouter =require("./routes/taskRoutes")
const userRouter =require("./routes/userRouter")
const globalErrorHandler = require('./controllers/errorController');
const AppError = require("../server/utils/appError");
const cors = require("cors");
// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  app.use(cors());
  //Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

  app.use(express.json());

  app.use((req, res, next) => {
    // eslint-disable-next-line no-console
    console.log('Hello from the middleware 👋');
    next();
  });
   
  //Routes 
app.use("/api/v1/task", taskRouter);
app.use("/api/v1/user", userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports =app; 
