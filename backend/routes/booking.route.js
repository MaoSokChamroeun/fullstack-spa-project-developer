const express = require('express')

const {getAllBooking ,createBooking , findBookingById ,deleteBooking} = require('../controllers/booking.controller')

const BookingRouter = express.Router();

BookingRouter.route("/")
            .get(getAllBooking)
            .post(createBooking)
    
BookingRouter.route('/:id')
            .get(findBookingById)
            .delete(deleteBooking)
module.exports = BookingRouter