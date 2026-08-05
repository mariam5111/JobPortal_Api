const Company = require('../models/Company');
const AppError = require('../utils/appError');

class CompanyService {
  static async createCompany(companyData) {
    const existingCompany = await Company.findOne({
      $or: [{ name: companyData.name }, { email: companyData.email }]
    });

    if (existingCompany) {
      throw new AppError('Company with this name or email already exists', 409);
    }

    return await Company.create(companyData);
  }

  static async getAllCompanies() {
    return await Company.find();
  }

  static async getCompanyById(id) {
    const company = await Company.findById(id);
    if (!company) throw new AppError('Company not found', 404);
    return company;
  }

  static async updateCompany(id, updateData) {
    const company = await Company.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });
    if (!company) throw new AppError('Company not found', 404);
    return company;
  }

  static async deleteCompany(id) {
    const company = await Company.findByIdAndDelete(id);
    if (!company) throw new AppError('Company not found', 404);
    return company;
  }
}

module.exports = CompanyService;