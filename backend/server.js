const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Initiate middleware

app.use(express.json({ extended: true }));

//Connecting Database
connectDB();

//Define Routes
app.use('/api/logs', require('./routes/api/logs'));
app.use('/api/techs', require('./routes/api/techs'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../build'));
}

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
