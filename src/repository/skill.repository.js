const Skill = require('../model/skill.model')
const Profile = require('../model/profile.model');
const { Op } = require('sequelize');

const SkillRepository = db => {
    const profile = Profile(db);
    const skill = Skill(db);
    profile.hasMany(skill);
    skill.belongsTo(profile);

    const create = async(id, payload) =>{
        try {
            return await skill.create({
                skill: payload.skill,
                level: payload.level,
                profileProfileCode: id
            })
        } catch (err) {
            throw err
        }
    }
    const list = async()=>{
        try{
            return await skill.findAll()
        }catch(err){throw err}
    }

    const getById = async(id) =>{
        try{
            const idx = await skill.findAll({where:{profileProfileCode:id}})
            if(!idx) return `Skill with value ID ${id} not found`;

            return idx;
        }catch(err){
            return err.message
        }
    }

    const remove = async(profileCode, id) =>{
        try{
            const idx = await skill.findOne({
                where:{
                    [Op.and]:[
                        {profileProfileCode:profileCode},
                        {id:id}
                    ]
                }
            });
            if(!idx) return `Skill with value ID ${id} not found`
            return await skill.destroy({
                where:{
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

    const update = async (id, payload) => {
        try {
            const idx = await skill.findOne({where:{id:id}})
            if(!idx) return `Skill with value ID ${id} not found`
            await skill.update(payload,{where:{id:id}})
            return await skill.findOne({where:{id:id}})
        } catch (err) {
            return err.message
        }
    }


    return{create,list,getById,remove,update}
}

module.exports = SkillRepository