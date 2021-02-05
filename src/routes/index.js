const router = require('express').Router();

router.get('/healthcheck', (req, res) => res.status(200).send({ status: 'healthy' }));

module.exports = router;
