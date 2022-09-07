const {DataTypes} = require('sequelize')

const WorkingExperience = db => {
    return db.define('working_experience',{
		workingExperience : DataTypes.STRING
    }, {
        freezeTableNames:true,
        underscored:true
    })
}

module.exports = WorkingExperience