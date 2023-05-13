// routes/router.js

const express = require('express');
const router = express.Router();
const morgan = require('morgan');

const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const middleware = require('../middleware/users.js');
const db = require('../db/mysql.js');
const singUpController = require('../controllers/singUpController.js');
const loginController = require('../controllers/loginController.js');
// routes/router.js

router.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/index.html');
})

router.post('/test', (req, res) => {
  console.log(req.body.username);
  res.status(200);
  res.send("OK")
})

/*
router.post('/sign-up', middleware.validateRegister, (req, res, next) => {
  console.log("as");
  console.log(req.body.username);
  db.query(
    `SELECT * FROM users WHERE LOWER(username) = LOWER(${db.escape(
      req.body.username
    )});`,
    (err, result) => {
      if (result.length) {
        return res.status(409).send({
          msg: 'This username is already in use!'
        });
      } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err
            });
          } else {
            // has hashed pw => add to database
            db.query(
              `INSERT INTO users (id, username, password, registered) VALUES ('${uuid.v4()}', ${db.escape(
                req.body.username
              )}, ${db.escape(hash)}, now())`,
              (err, result) => {
                if (err) {
                  throw err;
                  return res.status(400).send({
                    msg: err
                  });
                }
                return res.status(201).send({
                  msg: 'Registered!'
                });
              }
            );
          }
        });
      }
    }
  );
});
*/

router.post('/sing-up', middleware.validateRegister, singUpController);
// routes/router.js

router.post('/login', loginController);

// routes/router.js

router.get('/secret-route', middleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = router;