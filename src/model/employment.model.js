const {DataTypes} = require('sequelize')

const Employment = db => {
    return db.define('employment',{
		id : {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false
		},
		jobTitle : DataTypes.STRING,
        employer : DataTypes.STRING,
        startDate : DataTypes.DATEONLY,
        endDate : DataTypes.DATEONLY,
        city : DataTypes.STRING,
        description : DataTypes.STRING
    }, {
        freezeTableNames:true,
        underscored:true
    })
}

module.exports = Employment