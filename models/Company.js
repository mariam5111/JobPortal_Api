const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Company name is required'],
      unique: true,
      trim: true
    },
    description: {
      type: String,
      required: [true, 'Company description is required']
    },
    industry: {
      type: String,
      required: [true, 'Industry is required']
    },
    email: {
      type: String,
      required: [true, 'Company email is required'],
      unique: true,
      lowercase: true
    },
    location: {
      type: String,
      required: [true, 'Location is required']
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Company', companySchema);