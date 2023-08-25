import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import _ from 'lodash';
import { ClockLoader } from 'react-spinners';
import { MDBContainer, MDBRow, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';
import Skills from '../../components/skill/Skills';
import Hobbies from '../../components/hobby/Hobbies';
import Languages from '../../components/language/Languages';
import Projects from '../../components/project/Projects';
import Certificates from '../../components/certificate/Certificates';
import UserInfo from '../../components/userinfo/UserInfo';
import Education from '../../components/education/Education';
import SocialHandles from '../../components/social/SocialHandles';

const CreateResume = () => {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    profession: '',
    portfolioUrl: 'https://',
  });
  const [skill, setSkill] = useState({
    skills: [],
  });
  const [hobby, setHobby] = useState({
    hobbies: [],
  });
  const [language, setLanguage] = useState({
    languages: [],
  });
  const [socialMediaHandles, setSocialMediaHandles] = useState({
    github: '',
    linkedIn: '',
  });
  const [education, setEducation] = useState({
    instituteName: '',
    degreeName: '',
  });
  const [projects, setProjects] = useState([
    { name: '', description: '', url: '', repoLink: '' }, // Initial object
  ]);
  const [certificates, setCertificates] = useState([
    { name: '', description: '', link: '' }, // Initial object
  ]);

  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line
  const navigate = useNavigate();

  // for handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (skill.skills.length === 0) {
      return toast.error('Please add 2/3 skills...', {
        className: 'bg-danger text-light',
      });
    }
    if (hobby.hobbies.length === 0) {
      return toast.error('Please add 1/2 hobbies...', {
        className: 'bg-danger text-light',
      });
    }
    if (language.languages.length === 0) {
      return toast.error('Please add 1/2 languages...', {
        className: 'bg-danger text-light',
      });
    }
    if (projects.length === 0) {
      return toast.error('Please add your projects...', {
        className: 'bg-danger text-light',
      });
    }
    if (certificates.length === 0) {
      return toast.error('Please add your certificates...', {
        className: 'bg-danger text-light',
      });
    }
    const formData = {
      ...userData,
      ...skill,
      ...hobby,
      ...language,
      socialMediaHandles,
      education,
      certificates,
      projects,
    };

    // console.log(_.isEmpty(formData));
    if (_.isEmpty(formData)) {
      return toast.error('Please fill-out this form.');
    }

    // try to make an axios call here
    try {
      setIsLoading(true);
      const res = await axios.post(
        process.env.REACT_APP_CREATE_RESUME,
        formData
      );
      setIsLoading(true);
      console.log(res);
      const { _id } = res.data.data;
      setIsLoading(false);
      toast.success(res.data.message, {
        duration: 5000,
        position: 'top-center',
      });
      navigate(`/your-resume/${_id}`);
    } catch (err) {
      // console.log(err);
      toast.error(err.response.data.error, {
        duration: 2500,
        position: 'top-right',
      });
      toast.error(err.response.data.message, {
        duration: 2500,
        position: 'top-right',
      });
      navigate('/create-resume');
    }
  };

  return (
    <>
      {isLoading ? (
        <MDBContainer
          tag={'div'}
          className='hstack justify-content-center mt-5'>
          <ClockLoader size={100} color='#333' />
        </MDBContainer>
      ) : (
        <form onSubmit={handleSubmit} className='p-2 bg-light shadow-3-strong'>
          <MDBContainer
            tag={'div'}
            className='gx-0 bg-light border border-1 border-dark rounded-3 p-3'>
            <MDBTypography
              variant='h1'
              className='text-center text-decoration-underline mb-3'>
              Create your own Résumé
            </MDBTypography>
            <hr />
            {/* Profile */}
            <UserInfo userData={userData} setUserData={setUserData} />

            {/* education */}
            <Education education={education} setEducation={setEducation} />

            {/* social handles */}
            <SocialHandles
              socialMediaHandles={socialMediaHandles}
              setSocialMediaHandles={setSocialMediaHandles}
            />

            {/* skills. hobbies, languages */}
            <MDBRow
              tag={'div'}
              className='mb-3 justify-content-center gap-lg-3 gap-md-3 gap-sm-3 gap-3'>
              <Skills skill={skill} setSkill={setSkill} />
              <Hobbies hobby={hobby} setHobby={setHobby} />
              <Languages language={language} setLanguage={setLanguage} />
            </MDBRow>

            {/*  projects */}
            <Projects projects={projects} setProjects={setProjects} />

            {/* certificates */}
            <Certificates
              certificates={certificates}
              setCertificates={setCertificates}
            />
            <hr />
            <MDBContainer
              tag={'div'}
              fluid
              className='gx-0 hstack justify-content-center gap-3'>
              <MDBBtn
                tag={'button'}
                color='dark'
                type='submit'
                rounded
                rippleCentered
                rippleColor='light'
                rippleDuration={600}
                rippleRadius={85}>
                Submit your data
              </MDBBtn>
              <MDBBtn
                tag={'button'}
                color='success'
                type='button'
                rounded
                rippleCentered
                rippleColor='light'
                rippleDuration={600}
                rippleRadius={85}
                onClick={() => navigate('/')}>
                Go back
              </MDBBtn>
            </MDBContainer>
          </MDBContainer>
        </form>
      )}
    </>
  );
};

export default CreateResume;
