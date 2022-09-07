const {DataTypes} = require('sequelize')

const Education = db => {
    return db.define('education',{
		id : {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false
		},
		school : DataTypes.STRING,
        degree : DataTypes.STRING,
        startDate : DataTypes.DATEONLY,
        endDate : DataTypes.DATEONLY,
        city : DataTypes.STRING,
        description : DataTypes.STRING
    }, {
        freezeTableNames:true,
        underscored:true
    })
}

module.exports = Education