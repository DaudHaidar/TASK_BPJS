const express = require('express');
const router = express.Router();
module.exports = (educationController) => {
    const {  create,list,getById,remove,update} = educationController();
    router.post('/:id', create);
    router.get('/', list);
    router.get('/:id', getById);
    router.delete('/:id',remove);
    router.put('/:id',update)
    return router;
}
