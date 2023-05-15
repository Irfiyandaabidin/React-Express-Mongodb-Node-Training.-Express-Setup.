const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// Me-require user model
const User = require('../../models/User');

// @route   POST api/users
// @desc    Register user
// @access  Public

router.post('/', [
    // .not().isEmpty => not empty Validation!
    check('name', 'Nama harus di isi').not().isEmpty(),
    check('email', 'Isi dengan valid email').isEmail(),
    check('password', 'Isi password minimal 6 atau lebih karakter').isLength({min: 6})
    ],

    // Menggunakan promise async/await
    async (req, res) => {
        // handle request
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Membuat variable menggunakan destructuring
        const { name, email, password } = req.body;
        
        // Membuat try catch
        try {
            // Jika user exist
            let user = await User.findOne({ email });
            // user exist
            if (user) {
                return res.status(400).json({ errors: [{ msg: "User email sudah terdaftar" }] });
            }

            // Get users gravatar
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })

            user = new User ({
                name,
                email,
                avatar,
                password
            });

            // Encrypt password dengan bycript
            // Membuat format hash dengan "salt"
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                // callback
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            )


            //  Return jsonwebtoken
        } catch(err) {
            console.error(err.message);
            res.status(500).send("Server error")
        }

});

// export route
module.exports = router;