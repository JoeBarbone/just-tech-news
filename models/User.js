const { Model, DataTypes, UniqueConstraintError } = require("sequelize");
const sequelize = require("../config/connection");

// create our model by exending the Model and DataTypes from Model
class User extends Model {}

// define table columns and configuration
User.init (
    {
        // define an id column
        id: {
            // use the special Sequelize DataTypes object provided what type of data it is
            type: DataTypes.INTEGER,
            
            // this is the equivalent of SQLs NOT NULL option
            allowNull: false,
            
            // instruct that this ist he Primary Key
            primaryKey: true,
            
            // turn on auto increment
            autoIncrement: true
        },
        // define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        
            // there cannot be any duplicate email values in this table
            unique: true,
            validate: {
                isEmail: true
            }
        },
        //define password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this means the password must be at least four characters long
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

        // pass in our imported sequelize connection (the direct connection to the database)

        sequelize,
  
        // don't automatically create createAt/updateAt timestamp fields
        timestamps: false,
  
        // don't pluralize name of database table
        freezeTableName: true,
  
        // use underscore instaed of camel case (comment_text vs commentText)
        underscored: true,
  
        // make it so our model name stays lowercase in the database
        modelName: 'user'    
    }
);

module.exports = User;