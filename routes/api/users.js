const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Test router
// @access  Public atau Private

router.get('/', (req, res) => res.send('User route'));

module.exports = router;