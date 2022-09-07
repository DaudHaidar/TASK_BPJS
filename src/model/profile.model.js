const {DataTypes} = require('sequelize')

const Profile = db => {
    return db.define('profile',{
    profileCode : {
        type:DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement:true,
		allowNull: false
        },
    wantedJobTitle : DataTypes.STRING(200),
	firstName : DataTypes.STRING(100),
	lastName : DataTypes.STRING(100),
    email : {
        type: DataTypes.STRING(30),
        unique: true
    },
	phone : {
        type:DataTypes.STRING(50),
        unique: true
        },
	country : DataTypes.STRING(50),
	city : DataTypes.STRING(50),
	address : DataTypes.STRING (200),
	postalCode : DataTypes.INTEGER,
	drivingLicense : {
        type:DataTypes.STRING(100),
        unique:true
        },
    nationality : DataTypes.STRING(100),
	placeOfBirth : DataTypes.STRING(50),
	dateOfBirth : DataTypes.DATEONLY,
	photoUrl : {
        type:DataTypes.STRING,
        unique:true
        }
    }, {
        freezeTableNames:true,
        underscored:true
    })
}

module.exports = Profile