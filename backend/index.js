const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan')
const path = require('path')
// 1. Config environment variables FIRST
dotenv.config({ path: './config.env' });

const app = express();

// 2. Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"))

// 3. Require Database and Routes AFTER config
const db = require('./config/db');
const AdminRouter = require('./routes/login.route');
const PackageRouter = require('./routes/package.route');
const ServiceRouter = require('./routes/services.route');
const BookingRouter = require('./routes/booking.route');
const CategoryRouter = require('./routes/category.route');
const BannerRouter = require('./routes/banner.route');
// 4. Connect to Database
db();

// 5. Mount Routes
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/api/admin', AdminRouter);
app.use('/api/package' , PackageRouter)
app.use('/api/services' , ServiceRouter)
app.use('/api/booking' , BookingRouter)
app.use('/api/category' , CategoryRouter)
app.use('/api/services' , ServiceRouter)
app.use('/api/banner' , BannerRouter)
const port = process.env.PORT || 6000;
app.listen(port, () => {
    console.log(`Server run on port ${port}`);
});