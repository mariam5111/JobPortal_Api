const CompanyService = require('../services/company.service');

const createCompany = async (req, res, next) => {
  try {
    const company = await CompanyService.createCompany(req.body);
    res.status(201).json({
      success: true,
      message: 'Company created successfully',
      data: company
    });
  } catch (error) {
    next(error);
  }
};

const getAllCompanies = async (req, res, next) => {
  try {
    const companies = await CompanyService.getAllCompanies();
    res.status(200).json({
      success: true,
      message: 'Companies retrieved successfully',
      data: companies
    });
  } catch (error) {
    next(error);
  }
};

const getCompanyById = async (req, res, next) => {
  try {
    const company = await CompanyService.getCompanyById(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Company retrieved successfully',
      data: company
    });
  } catch (error) {
    next(error);
  }
};

const updateCompany = async (req, res, next) => {
  try {
    const company = await CompanyService.updateCompany(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'Company updated successfully',
      data: company
    });
  } catch (error) {
    next(error);
  }
};

const deleteCompany = async (req, res, next) => {
  try {
    await CompanyService.deleteCompany(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Company deleted successfully',
      data: null
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany
};