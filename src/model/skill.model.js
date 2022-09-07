const {DataTypes} = require('sequelize')

const Skill = db => {
    return db.define('skill',{
		id : {
			type:DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement:true,
			allowNull: false
		},
		skill : DataTypes.STRING,
        level : DataTypes.STRING
    }, {
        freezeTableNames:true,
        underscored:true
    })
}

module.exports = Skill