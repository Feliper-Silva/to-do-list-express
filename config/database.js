require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// const MONGODB_URI = 'mongobd://localhost/to-do-list'

const MONGODB_URI =
  'mongodb+srv://' +
  process.env.DB_USER +
  ':' +
  process.env.DB_PASSWORD +
  '@cluster0.5ayai.mongodb.net/' +
  process.env.DB_DATA_BASE +
  '?retryWrites=true&w=majority';

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => {
    console.log('conectado ao MongoDB', db.connection.host);
  })
  .catch(err => console.log(err));
