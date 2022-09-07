const express = require('express');
const router = express.Router();
module.exports = (profileController) => {
    const {  create,list,getById,remove,update} = profileController();
    router.post('/', create);
    router.get('/', list);
    router.get('/:id', getById);
    router.delete('/:id',remove);
    router.put('/update',update)
    return router;
}
