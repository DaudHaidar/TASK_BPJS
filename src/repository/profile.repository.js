const Profile = require('../model/profile.model')

const ProfileRepository = db => {
    const create = async(payload) =>{
        try {
            return await Profile(db).create(payload)
        } catch (err) {
            throw err
        }
    }
    const list = async(payload)=>{
        try{
            return await Profile(db).findAll(payload)
        }catch(err){throw err}
    }

    const getById = async(id) =>{
        try{
            const profile = await Profile(db).findByPk(id);
            if(!profile) return `Profile with value ID ${id} not found`;

            return profile;
        }catch(err){
            return err.message
        }
    }

    const remove = async(id) =>{
        try{
            const profile = await Profile(db).findByPk(id);
            if(!profile) return `Profile with value ID ${id} not found`
            return await Profile(db).destroy({where:{id : id}});
        }catch(err){
            return err.message
        }
    }

    const update = async (payload) => {
        try {
            const profile = await Profile(db).findByPk(payload.profileCode)
            if(!profile) return `Profile with value ID ${payload.profileCode} not found`
            return await Profile(db).update(payload,{where:{profileCode:payload.profileCode}})
        } catch (err) {
            return err.message
        }
    }


    return{create,list,getById,remove,update}
}

module.exports = ProfileRepository