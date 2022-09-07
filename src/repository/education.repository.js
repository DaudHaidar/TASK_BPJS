const Education = require('../model/education.model')
const Profile = require('../model/profile.model')
const {Op}= require('sequelize')


const EducationRepository = db => {
    const profile = Profile(db);
    const education = Education(db);
   
    profile.hasMany(education);
    education.belongsTo(profile);

    const create = async(payload,id) =>{
        try {
            return await education.create({
                school: payload.school,
                degree: payload.degree,
                startDate: payload.startDate,
                endDate: payload.endDate,
                city: payload.city,
                description: payload.description,
                profileProfileCode: id 
            })
        } catch (err) {
            throw err
        }
    }
    const list = async()=>{
        try{
            return await education.findAll()
        }catch(err){throw err}
    }

    const getById = async(id) =>{
        try{
            const idx = await education.findAll({where:{profileProfileCode:id}});
            if(!idx) return `Education with value ID ${id} not found`;

            return idx;
        }catch(err){
            return err.message
        }
    }

    const remove = async(id,profileCode) =>{
        try{
            const idx = await education.findOne({
                where:{
                    [Op.and]:[
                        {profileProfileCode:profileCode},
                        {id:id}
                    ]
                }
            });
            if(!idx) return `Education with value ID ${id} not found`
            return await education.destroy({where:{
                [Op.and]:[
                    {profileProfileCode:profileCode},
                    {id:id}
                ]
            }
        });
        }catch(err){
            return err.message
        }
    }

    const update = async (payload,id,profileCode) => {
        try {
            const idx = await education.findOne({ 
                where:{
                [Op.and]:[
                    {profileProfileCode:profileCode},
                    {id:id}
                ]
            }
        });
            if(!idx) return `Education with value ID ${payload.id} not found`
            await education.update(payload,{where:{
                [Op.and]:[
                    {profileProfileCode:profileCode},
                    {id:id}
                ]
            }
        });
            return await education.findOne({ 
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

module.exports = EducationRepository