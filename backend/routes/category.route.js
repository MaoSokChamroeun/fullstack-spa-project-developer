const express = require('express')
const {getAllCategory, createCategory , findCategoryById, updateCategoryById , deleteCategoryById} = require('../controllers/category.controller');
const CategoryRouter  = express.Router();

CategoryRouter.route('/')
            .get(getAllCategory)
            .post(createCategory)

CategoryRouter.route('/:id')
                .get(findCategoryById)
                .put(updateCategoryById)
                .delete(deleteCategoryById);
module.exports = CategoryRouter