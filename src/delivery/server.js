const express = require('express');
const Config = require('./config/config');
const DbMigration = require('./config/db-migration');
const jsonMiddleware = require('./middleware/json.middleware');
const AppRoute = require('./route/app.route');
const InfraManager = require('../manager/infra.manager');
const RepoManager = require('../manager/repo.manager');
const ServiceManager = require('../manager/service.manager');

const ProfileController = require('./controller/profile.controller');
const ProfileRoute = require('./route/profile.route');

const SkillRoute = require('../delivery/route/skill.route')
const SkillController = require('../delivery/controller/skill.controller')

const EmploymentRoute=require('../delivery/route/employment.route');
const EmploymentController = require('../delivery/controller/employment.controller')

const EducationRoute = require('../delivery/route/education.route')
const EducationController = require('../delivery/controller/education.controller')

const WorkingExperienceRoute= require('../delivery/route/working-experience.route')
const WorkingExperienceController = require('../delivery/controller/working-experience.controller')


module.exports = () => {
    const app = express();
    const { host, port } = Config();
    const infraManager = () => InfraManager(Config);
    const repoManager = () => RepoManager(infraManager);
    const serviceManager = () => ServiceManager(repoManager);
    const { initDb } = infraManager()

    const initProfileRoute = () => {
        const profileController = () => ProfileController(serviceManager().profileService());
        return ProfileRoute(profileController);
    }

    const initSkillRoute = () => {
        const skillController = () => SkillController(serviceManager().skillService());
        return SkillRoute(skillController);
    }

    const initEmploymentRoute = () => {
        const employmentController = () => EmploymentController(serviceManager().employmentService());
        return EmploymentRoute(employmentController);
    }

    const initEducationRoute = () => {
        const educationController = () => EducationController(serviceManager().educationService());
        return EducationRoute(educationController);
    }

    const initWorkingExperienceRoute=()=>{
        const workingExperienceController = () => WorkingExperienceController(serviceManager().workingExperienceService());
        return WorkingExperienceRoute(workingExperienceController);
    }

    const initController = () => {
        app.use(jsonMiddleware);
        app.use(AppRoute(initProfileRoute(),initSkillRoute(),initEmploymentRoute(),initEducationRoute(),initWorkingExperienceRoute()))
    }

    const run = () => {
        initController();
        DbMigration(initDb()).catch();
        app.listen(port, host, () => {
            console.log(`Server run on ${host}:${port}`);
        })
    }

    return { run }
}
