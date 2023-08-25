const mongoose = require('mongoose');
const { Schema } = mongoose;

// create a resume schema
const resumeSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  portfolioUrl: {
    type: String,
    default: undefined
  },
  skills: {
    type: [String],
    enum: ['html', 'css', 'javascript', 'reactjs', 'nodejs', 'express', 'php', 'python', 'java', 'kotlin', 'flutter', 'rust', 'bootstrap', 'mdbootstrap', 'mui', 'git', 'github', 'aws', 'mongodb', 'mysql',],
    message: '{VALUE} is not supported'
  },
  hobbies: {
    type: [String],
    default: undefined
  },
  languages: {
    type: [String],
    enum: ['english', 'hindi', 'other language'],
    default: "english",
    message: '{VALUE} is not supported'
  },
  socialMediaHandles: {
    type: Map,
    of: String,
    required: true
  },
  education: {
    type: Map,
    of: String,
    required: true
  },
  certificates: [
    new Schema({
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        default: undefined
      },
      link: {
        type: String,
        required: true
      },
    })
  ],
  projects: [
    new Schema({
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      },
      repoLink: {
        type: String,
        required: true
      }
    })
  ]
}, { versionKey: false });

// middleware
// remove version key in every query
resumeSchema.pre(/^find/, function (next) {
  this.select("-__v");
  next();
});



const Resume = mongoose.model('Resume', resumeSchema);
module.exports = Resume;
