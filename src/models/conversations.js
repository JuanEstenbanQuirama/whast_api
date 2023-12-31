'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conversations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Conversations.hasMany(models.Messages, {foreignKey: 'conversationId'});
      // una conversacion tiene muchos participantes 
      Conversations.hasMany(models.Participants, {foreignKey: 'conversationId'});
      // una conversacion pertenede a un usuario (la creoo)
      Conversations.belongsTo(models.Users,{foreignKey:'createdBy'});
    }
  }
  Conversations.init({
    title: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    conversationImage: DataTypes.STRING,
    type: DataTypes.ENUM('single', 'group')
  }, {
    sequelize,
    modelName: 'Conversations',
  });
  return Conversations;
};