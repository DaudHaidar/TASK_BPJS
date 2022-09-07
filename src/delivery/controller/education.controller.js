const Response =require('../../utils/response')

const EducationController = (educationService) =>{
    const {add,get,getId,erase,edit} = educationService()

    const create = async (req,res) =>{
        try {
            const payload = req.body;
            const id = req.params.id;
            const education = await add(payload,id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', education))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }
    const list = async(req,res)=>{
        try{
            const education = await get();
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', education))

        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
            
        }
    }

    const getById = async (req, res) => {
        try {
            const id = req.params.id;
            const education = await getId(id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', education))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    const remove = async(req,res)=>{
        try {
            const profileCode = req.params.id;
            const id = req.query.id
            const education = await erase(id,profileCode)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', education))
        } catch (error) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
            
        }
    }
    const update = async (req, res) => {
        try {
            const payload = req.body;
            const profileCode = req.params.id;
            const id = req.query.id
            const education = await edit(payload,id,profileCode);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', education))
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message))
        }
    }

    

    return {create,list,getById,remove,update}

}

module.exports = EducationController
