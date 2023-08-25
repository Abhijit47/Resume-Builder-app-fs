import React from 'react';
import { MDBCol, MDBContainer, MDBInput, MDBRow } from 'mdb-react-ui-kit';

const Education = ({ education, setEducation }) => {
  // for handle education
  const handleEducation = (ev) => {
    const { name, value } = ev.currentTarget;
    setEducation({ ...education, [name]: value });
  };

  return (
    <MDBContainer>
      <MDBRow className='mb-3 justify-content-center'>
        <MDBCol
          lg={4}
          md={4}
          sm={11}
          className='col-12 mb-lg-0 mb-md-0 mb-sm-3 mb-3'>
          <MDBInput
            label='Institute name'
            id='institute'
            type='text'
            name='instituteName'
            placeholder='your education'
            value={education.instituteName}
            onChange={handleEducation}
            required
          />
        </MDBCol>
        <MDBCol lg={4} md={4} sm={11} className='col-12'>
          <MDBInput
            label='Degree name'
            id='degree'
            type='text'
            name='degreeName'
            placeholder='your degree'
            value={education.degreeName}
            onChange={handleEducation}
            required
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Education;
