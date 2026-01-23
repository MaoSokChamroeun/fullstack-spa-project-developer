const dotenv = require('dotenv');
dotenv.config({path : './config.env'})
const mongoose = require('mongoose');
const AdminModel = require('./models/Admin.model')
const seedAdmin = async () => {
    try {    
        // 1. Connect to Database
        await mongoose.connect(process.env.DATABASE_URL);

        // 2. Check for existing admin
        const adminExited = await AdminModel.findOne({ email: 'maosokchomroeun@gmail.com' });
        
        if (!adminExited) {
            const admin = new AdminModel({
                username: 'maosokchomroeun',
                email: 'maosokchomroeun@gmail.com',
                password: 'adminchomroeun2004'
            });
            
            await admin.save();
            console.log('✅ Admin account seeded successfully!');
        } else {
            console.log('ℹ️ Admin already exists.');
        }

    } catch (error) {
        console.error('❌ Seeding Error:', error.message);
    } finally {
       
        mongoose.connection.close();
        process.exit();
    }
};

seedAdmin();