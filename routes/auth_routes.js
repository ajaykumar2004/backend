const express = require('express');
const router = express.Router();
const cors = require('cors')
const {test, registerUser,loginUser} = require('../controllers/authController')

//middleware


//<------------------------------REPLACE ORIGIN WITH IP FOR FRONT END------------------------------------------>
router.use(
    cors({
        origin: 'https://dazzling-cendol-269c1c.netlify.app',
        credentials: true,
    })
)


router.get('/',test)
router.post('/register', registerUser)
router.post('/login',loginUser)

module.exports = router
