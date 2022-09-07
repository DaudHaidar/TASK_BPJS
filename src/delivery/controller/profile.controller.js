const Response =require('../../utils/response')

const ProfileController = (profileService) =>{
    const {add,get,getId,erase,edit} = profileService()

    const create = async (req,res) =>{
        try {
            const payload = req.body;
            const profile = await add(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', profile))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }
    const list = async(req,res)=>{
        try {
            payload = req.body
            const profile = await get(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', profile))

        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
            
        }
    }

    const getById = async (req, res) => {
        try {
            const id = req.params.id;
            const profile = await getId(id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', profile))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    const remove = async(req,res)=>{
        try {
            const id = req.params.id
            const profile = await erase(id)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', profile))
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
            
        }
    }
    const update = async (req, res) => {
        try {
            const payload = req.body;
            const profile = await edit(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', profile))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    

    return {create,list,getById,remove,update}

}

module.exports = ProfileController
