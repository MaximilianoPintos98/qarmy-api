const CertificateService = require("../services/certificate.service");

const service = new CertificateService();

const createCertificate = async (req, res) => {
  try {
    const response = await service.create(req.body);
    res.json({ success: true, data: response });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const getAllCertificates = async (req, res) => {
  const { page = 1, pageSize = 10, first_name, last_name, license, course, note, date } = req.query;

  try {
    const certificates = await service.getAllCertificates(page, pageSize, { first_name, last_name, license, course, note, date });
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getCertificateByLicense = async (req, res) => {
  const { license } = req.body;
  
  try {
    const certificate = await service.getCertificateByField(license);

    if (!certificate) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    return res.json(certificate);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const updateCertificate = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const response = await service.update(id, body);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

const deleteCertificate = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await service.delete(id);
    res.json(response);
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = {
  createCertificate,
  getAllCertificates,
  getCertificateByLicense,
  updateCertificate,
  deleteCertificate,
};
