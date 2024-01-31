const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
// Middleware setup
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);
// Connect to the database
connectDB();

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
