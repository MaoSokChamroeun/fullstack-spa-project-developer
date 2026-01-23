const express = require('express');
const {
  getAllService, 
  createServices, 
  getServiceById, 
  deleteServicesById, 
  updateServiceById, 
  getServiceByCategory
} = require('../controllers/services.controller');
const { uploadServiceFile } = require('../controllers/upload.controller');

const ServiceRouter = express.Router();

// 1. Static/Base Routes
ServiceRouter.route('/')
    .get(getAllService)
    .post(uploadServiceFile, createServices);

ServiceRouter.get('/category/:slug', getServiceByCategory);

// 3. ID Routes
ServiceRouter.route('/:id')
    .get(getServiceById)
    .delete(deleteServicesById)
    .put(uploadServiceFile, updateServiceById);

module.exports = ServiceRouter;