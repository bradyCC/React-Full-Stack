const express = require('express');

module.exports = () => {
  const router = express.Router();

  /* GET home page. */
  router.get('/', async (req, res) => {
    res.render('index', { title: 'Express' });
  });

  return router;
}
