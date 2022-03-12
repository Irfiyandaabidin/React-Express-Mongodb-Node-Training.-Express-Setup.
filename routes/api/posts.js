const express = require('express');
const router = express.Router();

// @route   GET api/posts
// @desc    Test router
// @access  Public atau Private

router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;