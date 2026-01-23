const express = require('express')
const {getAllPackage, createPackage, findPackageById , updatePackageById , deletePackage} = require('../controllers/package.controller');
const {uploadPackageFile} = require('../controllers/upload.controller')
const PackageRouter = express.Router();

PackageRouter.route('/')
            .get(getAllPackage)
            .post(uploadPackageFile ,createPackage)

PackageRouter.route('/:id')
            .get(findPackageById)
            .delete(deletePackage)
            .put(uploadPackageFile , updatePackageById)
module.exports = PackageRouter