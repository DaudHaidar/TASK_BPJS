const ProfileService = require('../service/profile.service');
const SkillService = require('../service/skill.service')
const EmploymentService = require('../service/employment.service');
const EducationService = require('../service/education.service');
const WorkingExperienceService = require('../service/working-experience.service');

module.exports = (repoManager) => {
    const { profileRepo,skillRepo,employmentRepo,educationRepo,workingExperienceRepo } = repoManager();
    // Semua repo
    const profileService = () => {
        return () => ProfileService(profileRepo());
    }
    const skillService =()=>{
        return ()=> SkillService(skillRepo())
    }

    const employmentService = ()=>{
        return ()=> EmploymentService(employmentRepo())
    }

    const educationService = ()=>{
        return ()=> EducationService(educationRepo())
    }

    const workingExperienceService = ()=>{
        return ()=> WorkingExperienceService(workingExperienceRepo())
    }
    return {
        profileService,skillService,employmentService,educationService,workingExperienceService
    }
}
