const express = require('express');
const router = express.Router();
module.exports = (workingExperienceController) => {
    const {  create,list,getById,update} = workingExperienceController();
    router.post('/:id', create);
    router.get('/', list);
    router.get('/:id', getById);
    router.put('/:id',update)
    return router;
}
