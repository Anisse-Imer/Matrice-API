// Router init
const router = require("express").Router();

// Call controller
const userController = require("../controllers/user.controller");
const { authentificateToken } = require("../utils/auth.js");


// Me by token 
router.post('/me', authentificateToken, 
                   userController.me);

// Connect user - return token
router.post('/login', userController.login);

// Create user - return if registered
router.post('/signup', userController.signup);

// Return user data by nickname
router.post('/', userController.getByNickname);

// Modify password - Take token
router.post('/password', authentificateToken, 
                         userController.modifyPassword);

// Modify user profile 
router.post('/update',  authentificateToken,
                        userController.updateUser);

//  Return user data by Id
router.post('/byid', userController.verifyExists
                   , userController.getById);

router.post('/getGroup', authentificateToken
                      , userController.group)
// Search user
router.post('/search', authentificateToken
                     , userController.search);

module.exports = router;