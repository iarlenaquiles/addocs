const router = require('express').Router();
const path = require('path');

router.get('/healthcheck', (req, res) => res.status(200).send({ status: 'healthy' }));
router.get('/',function(req, res){
    res.sendFile(path.join(__dirname+'../../index.html'));
});
  
module.exports = router;
