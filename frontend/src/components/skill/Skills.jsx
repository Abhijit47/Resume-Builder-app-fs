import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBSwitch,
  MDBTypography,
} from 'mdb-react-ui-kit';

const Skills = ({ skill, setSkill }) => {
  const handleSkills = (ev) => {
    const { value, checked } = ev.currentTarget;
    const { skills } = skill;

    if (checked) {
      setSkill({
        skills: [...skills, value],
      });
    } else {
      setSkill({
        skills: skills.filter((ev) => ev !== value),
      });
    }
  };

  return (
    <MDBRow className='justify-content-center'>
      <MDBCol lg={8} md={8} sm={11} className='col-12'>
        <MDBContainer
          tag={'div'}
          className='gx-0 border border-1 border-dark bg-light shadow-3-strong rounded-3'>
          <MDBTypography
            variant='h3'
            className='text-decoration-underline text-center'>
            Skills
          </MDBTypography>
          <MDBRow className='gx-0 justify-content-lg-between justify-content-md-between justify-content-sm-center justify-content-center gap-2 p-2'>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='html'
                label='HTML'
                value={'html'}
                onChange={handleSkills}
                required
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='css'
                label='CSS'
                value={'css'}
                onChange={handleSkills}
                required
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='js'
                label='JavaScript'
                value={'javascript'}
                onChange={handleSkills}
                required
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='bootstrap'
                label='Bootstrap'
                value={'bootstrap'}
                onChange={handleSkills}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='react'
                label='React'
                value={'reactjs'}
                onChange={handleSkills}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='node'
                label='NodeJS'
                value={'nodejs'}
                onChange={handleSkills}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='express'
                label='Express'
                value={'express'}
                onChange={handleSkills}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='mongo'
                label='Mongo DB'
                value={'mongodb'}
                onChange={handleSkills}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='mysql'
                label='MySQL'
                value={'mysql'}
                onChange={handleSkills}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='git'
                label='Git'
                value={'git'}
                onChange={handleSkills}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='github1'
                label='Github'
                value={'github'}
                onChange={handleSkills}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='aws'
                label='AWS'
                value={'aws'}
                onChange={handleSkills}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBCol>
    </MDBRow>
  );
};

export default Skills;
