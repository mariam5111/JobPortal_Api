const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const errorHandler = require('./middleware/errorHandler.js');
const userRoutes = require('./routes/user.routes.js');
const applicationRoutes = require('./routes/application.routes.js');
const jobRoutes = require('./routes/job.routes');

const companyRoutes = require('./routes/company.routes.js');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/companies', companyRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route - ${req.originalUrl} Not Found`
  });
});


app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});