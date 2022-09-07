const Employment = require('../model/employment.model')
const Profile = require('../model/profile.model')
const{Op}= require('sequelize')

const EmploymentRepository = db => {
    const profile = Profile(db);
    const employment = Employment(db);

    profile.hasMany(employment);
    employment.belongsTo(profile);



    const create = async(payload,id) =>{
        try {
            return await employment.create({
                jobTitle:payload.jobTitle,
                employer:payload.employer,
                startDate:payload.startDate,
                endDate:payload.endDate,
                city:payload.city,
                description:payload.description,
                profileProfileCode:id
            })
        } catch (err) {
            throw err
        }
    }
    const list = async()=>{
        try{
            return await employment.findAll()
        }catch(err){throw err}
    }

    const getById = async(id) =>{
        try{
            const idx = await employment.findAll({where:{profileProfileCode:id}});
            if(!idx) return `Employment with value ID ${id} not found`;

            return idx;
        }catch(err){
            return err.message
        }
    }

    const remove = async(id,profileCode) =>{
        try{
            const idx = await employment.findOne({ 
                where:{
                [Op.and]:[
                    {profileProfileCode:profileCode},
                    {id:id}
                ]
            }
        });
            if(!idx) return `Employment with value ID ${id} not found`
            return await employment.destroy({ where:{
                [Op.and]:[
                    {profileProfileCode:profileCode},
                    {id:id}
                ]
            }});
        }catch(err){
            return err.message
        }
    }

    const update = async (payload,id,profileCode) => {
        try {
            const idx = await employment.findOne({ 
                where:{
                [Op.and]:[
                    {profileProfileCode:profileCode},
                    {id:id}
                ]
            }
        });
            if(!idx) return `Employment with value ID ${payload.id} not found`
            await employment.update(payload,{
                where:{
                [Op.and]:[
                    {profileProfileCode:profileCode},
                    {id:id}
                ]
            }})
            return await employment.findOne({ 
                where:{
                [Op.and]:[
                    {profileProfileCode:profileCode},
                    {id:id}
                ]
            }
        });
        } catch (err) {
            return err.message
        }
    }


    return{create,list,getById,remove,update}
}

module.exports = EmploymentRepository