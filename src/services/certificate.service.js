const { models } = require("../libs/sequelize");

const { Op } = require("sequelize");

class CertificateService {
  constructor() {}

  async getAllCertificates(page = 1, pageSize = 10, filters = {}) {
    const offset = (page - 1) * pageSize;
    const whereClause = {};

    const { first_name, last_name, license, course, note, date } = filters;

    if (first_name) whereClause.first_name = { [Op.like]: `%${first_name}%` };
    if (last_name) whereClause.last_name = { [Op.like]: `%${last_name}%` };
    if (license) whereClause.license = { [Op.like]: `%${license}%` };
    if (course) whereClause.course = { [Op.like]: `%${course}%` };
    if (note) whereClause.note = { [Op.like]: `%${note}%` };
    if (date) whereClause.date = { [Op.like]: `%${date}%` };

    const { count, rows } = await models.Certificate.findAndCountAll({
      where: whereClause,
      limit: pageSize,
      offset: offset,
    });

    const totalPages = Math.ceil(count / pageSize);

    return {
      totalCount: count,
      totalPages: totalPages,
      currentPage: parseInt(page),
      data: rows,
    };
  }

  async getCertificateByField(license) {
    const certificate = await models.Certificate.findOne({
      where: {
        license: { [Op.like]: `%${license}%` },
      },
    });
  
    return certificate;
  }

  async create(data) {
    return await models.Certificate.create(data);
  }

  async update(id, data) {
    const model = await this.findOne(id);
    const res = await model.update(data);

    return res;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();

    return { deleted: true };
  }
}

module.exports = CertificateService;
