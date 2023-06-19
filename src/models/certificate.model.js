const { Model, DataTypes } = require("sequelize");

const CERTIFICATE_TABLE = "certificate";

class Certificate extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: CERTIFICATE_TABLE,
      modelName: "Certificate",
      timestamps: true,
    };
  }
}

const CertificateSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  first_name: {
    allowNull: false,
    type: DataTypes.STRING(100),
    field: "first_name",
  },
  last_name: {
    allowNull: false,
    type: DataTypes.STRING(100),
    field: "last_name",
  },
  dni: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "dni",
  },
  course: {
    allowNull: false,
    type: DataTypes.STRING(250),
    field: "course"
  },
  note: {
    allowNUll: false,
    type: DataTypes.STRING(250),
    field: "note"
  },
};

module.exports = { Certificate, CertificateSchema };
