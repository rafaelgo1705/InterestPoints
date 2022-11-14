import { Sequelize, DataTypes, Model, Dialect } from "sequelize";

const sequelize = new Sequelize({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  dialect: process.env.DATABASE_DIALECT as Dialect,
});

export class InterestPointsModel extends Model {}

InterestPointsModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coordinateX: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    coordinateY: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "interest-points",
    timestamps: true,
  }
);
