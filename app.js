import express from "express";
import mongoose from "mongoose";
import { contactRoutes } from "./routes/contact.routes";

const app = express();

const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose
  .connect("mongodb://localhost:27017/contact-numbers", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connection Succeeded.");
  })
  .catch((err) => {
    console.log("Error in DB connection: " + err);
  });


//Setup CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,OPTIONS, PATCH"
  );

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  next();
});



app.listen(PORT, () => {
  console.log('App running on port', PORT);
})

app.use('/contacts', contactRoutes)