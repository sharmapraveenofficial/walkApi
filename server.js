const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=require('./app')

dotenv.config({path:'./config.env'})    

const port=process.env.PORT||8000;


const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );
  
  mongoose
    //.connect(process.env.DATABASE_LOCAL, { localhost
    .connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      poolSize:1000
    })
    .then(() => console.log('DB connection successfully!'));


const server = app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });