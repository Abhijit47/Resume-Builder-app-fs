import React from 'react';
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from 'mdb-react-ui-kit';

const Projects = ({ projects, setProjects }) => {
  // Function to update a specific input object
  const updateInput = (index, field, value) => {
    const updatedInputs = [...projects];
    updatedInputs[index][field] = value;
    setProjects(updatedInputs);
  };

  // Function to add a new input object
  const addInput = () => {
    setProjects([
      ...projects,
      { name: '', description: '', url: '', repoLink: '' },
    ]);
  };

  // Function to remove an input object
  const removeInput = (index) => {
    const updatedInputs = projects.filter((_, i) => i !== index);
    setProjects(updatedInputs);
  };

  return (
    <MDBContainer tag={'div'} className='vstack align-items-center gap-3 p-3'>
      <MDBTypography variant='h3'>Projects</MDBTypography>
      {projects.map((project, index) => (
        <MDBRow tag={'div'} key={index} className='justify-content-center p-2'>
          <MDBCol lg={4} tag={'div'} className='mb-2'>
            <MDBInput
              label='Project Name'
              id={`project_name${index + 1}`}
              placeholder={`Project ${index + 1} Name`}
              type='text'
              value={projects.name}
              onChange={(e) => updateInput(index, 'name', e.target.value)}
              minLength={3}
              maxLength={30}
              required
            />
          </MDBCol>
          <MDBCol lg={4} tag={'div'} className='mb-2'>
            <MDBInput
              label='Project URL'
              id={`project_url_${index + 1}`}
              type='url'
              placeholder={`Project ${index + 1} URL`}
              value={projects.url}
              onChange={(e) => updateInput(index, 'url', e.target.value)}
              required
            />
          </MDBCol>
          <MDBCol lg={4} tag={'div'} className='mb-2'>
            <MDBInput
              label='Project Repo Link'
              id={`project_repo_${index + 1}`}
              type='url'
              placeholder={`Project ${index + 1} Repo Link`}
              value={projects.repoLink}
              onChange={(e) => updateInput(index, 'repoLink', e.target.value)}
              required
            />
          </MDBCol>
          <MDBCol lg={10} tag={'div'} className='mb-2'>
            <MDBTextArea
              label='Project Description'
              id={`project_desc_${index + 1}`}
              rows={1}
              placeholder={`Project ${index + 1} Description`}
              value={projects.description}
              onChange={(e) =>
                updateInput(index, 'description', e.target.value)
              }
              minLength={5}
              maxLength={30}
              required
            />
          </MDBCol>
          {/* Buttons */}
          <MDBCol tag={'div'} className='m-auto hstack justify-content-center'>
            <MDBBtn
              type='button'
              size='sm'
              color='success'
              rippleCentered
              rippleColor='dark'
              rippleDuration={800}
              rippleRadius={35}
              className='me-3'
              onClick={addInput}>
              <MDBIcon fas icon='plus' iconType='solid' size='sm' />
            </MDBBtn>
            <MDBBtn
              type='button'
              size='sm'
              color='danger'
              rippleCentered
              rippleColor='light'
              rippleDuration={800}
              rippleRadius={35}
              onClick={() => removeInput(index)}>
              <MDBIcon fas icon='xmark' iconType='solid' size='sm' />
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      ))}
      <MDBBtn
        tag='button'
        color='dark'
        className={`${projects.length > 0 ? 'd-none' : 'd-block'}`}
        rounded
        rippleCentered
        rippleColor='light'
        rippleRadius={35}
        rippleDuration={300}
        onClick={addInput}>
        Add Projects
      </MDBBtn>
    </MDBContainer>
  );
};

export default Projects;
