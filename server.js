const fs = require('fs');
const express = require('express');
const sequelize = require('./db/connection');
const inquirer= require('inquirer');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Use apiRoutes
app.use('/api', apiRoutes);


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});


sequelize.sync({ force: true }).then(() => {
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});