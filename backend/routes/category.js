const express = require('express');
const router = express.Router()

const {userById} = require('../controllers/authController')
const {create, list, remove, categoryById} = require('../controllers/categoryController')

// routes
router.get('/categories', list)
router.post('/create/:userId', create)
router.delete('/:categoryId', remove)

//param
router.param('categoryId', categoryById)
router.param('userId', userById)

module.exports = router