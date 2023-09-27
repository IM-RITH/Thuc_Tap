const express = require('express');
const app = express();
const jobRoute = require('./routes/JobRoutes');
const UserRoute = require('./routes/UserRoutes');
require('dotenv').config();
const database = require('./config/database');

app.use(express.json())
app.use('/api/jobs/', jobRoute);
app.use('/api/users/', UserRoute);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));