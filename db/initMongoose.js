const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('connected', () => console.log('Connected to DB successfully'));
db.on('error', (err) => console.log(`Error connecting to DB : ${err}`));
db.on('disconnected', () => console.log(`DB disconnected`));
