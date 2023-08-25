const Resume = require('../models/resumeModel');
const { successResponse, errorResponse } = require('./../utils/utilities');

// create resume
const createResume = async (req, res, next) => {
  try {
    // 1. Get data from body
    const { firstname, lastname, email, phone, profession, portfolioUrl, skills, hobbies, languages, socialMediaHandles, education, certificates, projects } = req.body;
    // console.log(projects);
    // res.send(req.body);

    // 2. validation check

    // 3. check user email is exist or not
    // const existingUser = await Resume.findOne({ email: email });
    // if (existingUser) {
    //   return errorResponse(res, 400, 'User exists with this email id.');
    // }

    // 4. create a fresh resume
    const newResume = await Resume.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      profession: profession,
      portfolioUrl: portfolioUrl,
      skills: skills,
      hobbies: hobbies,
      languages: languages,
      socialMediaHandles: {},
      education: {},
      certificates: certificates,
      projects: projects
    });

    // set the map values of social media handles
    newResume.socialMediaHandles.set('github', socialMediaHandles.github);
    newResume.socialMediaHandles.set('linkedIn', socialMediaHandles.linkedIn);
    newResume.socialMediaHandles.set('twitter', socialMediaHandles.twitter);
    newResume.socialMediaHandles.set('facebook', socialMediaHandles.facebook);
    newResume.socialMediaHandles.set('youtube', socialMediaHandles.youtube);

    // set the map values of education
    newResume.education.set('instituteName', education.instituteName);
    newResume.education.set('degreeName', education.degreeName);

    // 5. save this resume to db
    const savedResume = await newResume.save();

    // 5. send back to the user
    successResponse(res, 201, 'Successfully created resume.', savedResume);

  } catch (err) {
    errorResponse(res, 400, 'Something went wrong with creating data', err.message);
  }
};

// get one resume
const getOneResume = async (req, res, next) => {
  try {
    // get the user id from url params
    const id = req.params.id;
    if (id.length !== 24) {
      return errorResponse(res, 400, 'Resume id isn\'t correct.');
    }

    const existingResume = await Resume.findById({ _id: id });
    if (!existingResume) {
      return errorResponse(res, 400, 'Can\'t find any resume with this id.');
    }

    successResponse(res, 200, 'Success', existingResume);
  } catch (err) {
    errorResponse(res, 400, 'Something went wrong with getting data', err);
  }

};

// get resume
const getResume = async (req, res, next) => {
  //
  try {
    const currentResume = await Resume.find({});
  } catch (error) {

  }
};

module.exports = { createResume, getOneResume, getResume };