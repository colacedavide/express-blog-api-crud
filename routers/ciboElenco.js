const express = require('express')
const router = express.Router();
const ciboController = require('../controllers/ciboController');

router.get('/', ciboController.index);

// show
router.get('/:id', ciboController.show);
// store
router.post('/', ciboController.create);
// update
router.put('/:id', ciboController.update);
// modify
router.patch('/:id', ciboController.update);
// destroy
router.delete('/:id', ciboController.destroy);


module.exports = router;