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
  license: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  first_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  course: {
    allowNull: false,
    type: DataTypes.STRING(250),
  },
  note: {
    allowNull: false,
    type: DataTypes.STRING(250),
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING(500),
  }
};

module.exports = { Certificate, CertificateSchema };
