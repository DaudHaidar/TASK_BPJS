const Response =require('../../utils/response')

const SkillController = (skillService) =>{
    const {add,get,getId,erase,edit} = skillService()

    const create = async (req,res) =>{
        try {
            const id = req.params.id;
            const payload = req.body;
            const skill = await add(id, payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', skill))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }
    const list = async(req,res)=>{
        try {
            const skill = await get();
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', skill))

        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
            
        }
    }

    const getById = async (req, res) => {
        try {
            const id = req.params.id;
            const skill = await getId(id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', skill))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    const remove = async(req,res)=>{
        try {
            const profileCode = req.params.id
            const { id } = req.query
            const skill = await erase(profileCode, id)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', skill))
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
            
        }
    }
    const update = async (req, res) => {
        try {
            const payload = req.body;
            const id = req.params.id
            const skill = await edit(id, payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', skill))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    

    return {create,list,getById,remove,update}

}

module.exports = SkillController
