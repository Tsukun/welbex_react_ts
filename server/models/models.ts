import sequelize from '../db';
import { DataTypes } from 'sequelize';

export const TableData = sequelize.define(
    'tabledata',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      date: { type: DataTypes.DATE, unique: true },
      name: { type: DataTypes.STRING },
      count: { type: DataTypes.INTEGER },
      distance: { type: DataTypes.STRING},
    },
    {
      timestamps: false,
    },
  );
  