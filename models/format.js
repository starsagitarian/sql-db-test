'use strict';
module.exports = (sequelize, DataTypes) => {
  const Format = sequelize.define('Format', {
     
    Format_Code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Format_Description: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {});

  Format.associate = function(models) {
    Format.hasMany(models.Title, {
      as: 'titles',
      foreignKey: 'titleId'
    });
  };

  return Format;
};