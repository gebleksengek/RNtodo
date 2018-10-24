'use strict';
module.exports = (sequelize, DataTypes) => {
  const todos = sequelize.define('todos', {
    title: DataTypes.STRING,
    comment: DataTypes.STRING,
    time: DataTypes.DATE,
    checked: DataTypes.BOOLEAN
  }, {});
  todos.associate = function(models) {
    // associations can be defined here
  };
  return todos;
};