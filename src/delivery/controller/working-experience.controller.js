const Response =require('../../utils/response')

const WorkingExperienceController = (workingexperienceService) =>{
    const {add,get,getId,edit} = workingexperienceService()

    const create = async (req,res) =>{
        try {
            const payload = req.body;
            const id = req.params.id
            const workingexperience = await add(id,payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', workingexperience))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }
    const list = async(req,res)=>{
        try {
            payload = req.body
            const workingexperience = await get(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', workingexperience))

        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
            
        }
    }

    const getById = async (req, res) => {
        try {
            const id = req.params.id;
            const workingexperience = await getId(id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', workingexperience))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    const update = async (req, res) => {
        try {
            const payload = req.body;
            const profileCode = req.params.id
            const workingexperience = await edit(payload,profileCode);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', workingexperience))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    

    return {create,list,getById,update}

}

module.exports = WorkingExperienceController
