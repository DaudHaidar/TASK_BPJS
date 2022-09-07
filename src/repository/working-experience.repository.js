const WorkingExperience = require('../model/working-experience.model')
const Profile = require('../model/profile.model');

const WorkingExperienceRepository = db => {
    const profile = Profile(db);
    const workingExperience = WorkingExperience(db);
    profile.hasOne(workingExperience)
    workingExperience.belongsTo(profile)

    const create = async(id, payload) =>{
        try {
            const idx = await workingExperience.findOne({where:{profileProfileCode:id}})
            if(idx) return `Working Experience with value Profile Code ${id} exist`
            return await workingExperience.create({
                workingExperience: payload.workingExperience,
                profileProfileCode: id
            })
        } catch (err) {
            throw err
        }
    }
    const list = async()=>{
        try{
            return await workingExperience.findAll()
        }catch(err){throw err}
    }

    const getById = async(id) =>{
        try{
            const idx = await workingExperience.findOne({where:{profileProfileCode:id}})
            if(!idx) return `Working Experience with value ID ${id} not found`;

            return idx;
        }catch(err){
            return err.message
        }
    }

    const update = async (payload,profileCode) => {
        try {
            const idx = await workingExperience.findOne({ 
                where:{
                    profileProfileCode:profileCode
            }
        });
            if(!idx) return `Working Experience with value ID ${payload.id} not found`
            await workingExperience.update(payload,{
                where:{
                    profileProfileCode:profileCode
            }})
            return await workingExperience.findOne({ 
                where:{
                    profileProfileCode:profileCode
            }
        });
        } catch (err) {
            return err.message
        }
    }


    return{create,list,getById,update}
}

module.exports = WorkingExperienceRepository