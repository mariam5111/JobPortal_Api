const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const errorHandler = require('./middleware/errorHandler.js');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// === الـ Routes الخاصة بكِ هنا ===
// app.use('/api/companies', companyRoutes);
// app.use('/api/jobs', jobRoutes);

// Handling 404 (Not Found Routes)
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route - ${req.originalUrl} Not Found`
  });
});

// === الـ Centralized Error Handler يُوضع آخر سطر دائماً ===
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});