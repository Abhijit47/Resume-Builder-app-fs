const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT;
const MONGO_URL = process.env.DATABASE_URI;
const MONGO_PASSWORD = process.env.DATABASE_PASSWORD;

// Connect mongoDB
const DB = MONGO_URL.replace("<password>", MONGO_PASSWORD);

mongoose.connect(DB)
  .then(() => {
    console.log('Connection Successful.');
  }).catch((err) => {
    console.log('Something went wrong to the connection', err.message);
  });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
