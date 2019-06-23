const express = require('express');

module.exports = () => {
  const router = express.Router();

  /* GET users listing. */
  router.get('/', async (req, res) => {
    res.send('respond with a resource');
  });

  return router;
}
