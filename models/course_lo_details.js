// const { Sequelize, DataTypes } = require('sequelize');

const Sequelize = require("sequelize");
const db = require("../database/conn");

const course_lo_details = db.define(
  "course_lo_details",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    curriculum_lo_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    course_lo_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
    },
    updated_at: {
      type: Sequelize.DATE,
    },
  },

  {
    tableName: "course_lo_details",
    timestamps: false, //Karena created_at dan update_at akan dibuat otomatis oleh sequelize
    // freezeTableName: true
  }
);

module.exports = course_lo_details;