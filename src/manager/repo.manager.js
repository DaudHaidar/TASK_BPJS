const ProfileRepository = require('../repository/profile.repository')
const SkillRepository = require('../repository/skill.repository')
const EmploymentRepository = require('../repository/employment.repository');
const EducationRepository = require('../repository/education.repository');
const WorkingExperienceRepository = require('../repository/working-experience.repository');

module.exports = (infraManager) => {
    const { initDb } = infraManager();
    const db = initDb();

    const profileRepo = () => {
        return () => ProfileRepository(db);
    }
    const skillRepo = () =>{
        return ()=> SkillRepository(db)
    }
    const employmentRepo = () =>{
        return ()=> EmploymentRepository(db)
    }
    const educationRepo=()=>{
        return ()=> EducationRepository(db)
    }
    const workingExperienceRepo =()=>{
        return ()=> WorkingExperienceRepository(db)
    }

    return {
        profileRepo,skillRepo,employmentRepo,educationRepo,workingExperienceRepo
    }
}
