const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');
const mongoDB = require("./db");

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Call the mongoDB function to establish a connection
mongoDB()
  .then(() => {
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.use('/api', require("./Routes/CreateUser"));
    app.use('/api', require("./Routes/DisplayData"));
    app.use('/api', require("./Routes/OrderData"));
    
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(error => {
    console.error("Error connecting to MongoDB:", error);
  });
