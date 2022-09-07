const Profile = require('../../model/profile.model')
const Employment = require('../../model/employment.model')
const Skill = require('../../model/skill.model')
const Education = require('../../model/education.model')
const WorkingExperience = require('../../model/working-experience.model')

const DbMigration = async (db) => {
    const profile = Profile(db);
    const employment = Employment(db);
    const skill = Skill(db);
    const education = Education(db);
    const workingExperience = WorkingExperience(db);
    profile.hasMany(employment);
    employment.belongsTo(profile);
    profile.hasMany(skill);
    skill.belongsTo(profile);
    profile.hasMany(education);
    education.belongsTo(profile);
    profile.hasOne(workingExperience)
    workingExperience.belongsTo(profile)
    await db.sync({alter:true})
}
module.exports = DbMigration;
