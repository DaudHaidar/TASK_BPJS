const express = require('express');
const router = express.Router();

module.exports = (profileRoute,skillRoute, employmentRoute, educationRoute,workingExperienceRoute) => {
    router.use('/api/profile', profileRoute);
    router.use('/api/skill', skillRoute);
    router.use('/api/employment',employmentRoute);
    router.use('/api/education',educationRoute);
    router.use('/api/working-experience',workingExperienceRoute)
    return router;
}
