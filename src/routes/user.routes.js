const { Router } = require('express');
const { createUser } = require('../controllers/users.controller');

const router = Router();

router.post('/users', createUser); // crear usuario

module.exports = router;
