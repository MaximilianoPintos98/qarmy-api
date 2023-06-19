const { Certificate, CertificateSchema } = require('./certificate.model');

function setupModels(sequelize) {
    Certificate.init(CertificateSchema, Certificate.config(sequelize));
}

module.exports = setupModels;