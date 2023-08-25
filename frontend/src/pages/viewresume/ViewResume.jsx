import {
  MDBBtn,
  MDBCol,
  MDBInput,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ViewResume = () => {
  const [resumeId, setResumeId] = useState('');

  const navigate = useNavigate();

  const handleNavigate = () => {
    if (resumeId === '') {
      return toast.error('Please provide resume id!', {
        duration: '1500',
        className: 'bg-danger text-light',
      });
    }
    navigate(`/your-resume/${resumeId}`);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <MDBRow className='gx-0 justify-content-center gap-4 my-5 p-3'>
      <MDBCol lg={5} md={5} sm={11} className='col-12'>
        <MDBTypography variant='h3'>Enter your Résumé Id</MDBTypography>
        <MDBInput
          label='Your Resume ID'
          id='resumeid'
          type='text'
          placeholder='Ex: 64e220738166d6aca7a2b0d1'
          name='resumeid'
          value={resumeId}
          onChange={(e) => setResumeId(e.target.value)}
        />
        {resumeId === '' ? (
          <>
            <MDBBtn
              tag={'button'}
              rounded
              disabled
              rippleCentered
              rippleColor='light'
              rippleDuration={600}
              rippleRadius={85}
              color='dark'
              className='mt-2 me-3'
              onClick={handleNavigate}>
              View resume
            </MDBBtn>
            <MDBBtn
              tag={'button'}
              rounded
              rippleCentered
              rippleColor='light'
              rippleDuration={600}
              rippleRadius={85}
              color='dark'
              className='mt-2'
              onClick={handleGoBack}>
              Go back
            </MDBBtn>
          </>
        ) : (
          <>
            <MDBBtn
              tag={'button'}
              rounded
              rippleCentered
              rippleColor='light'
              rippleDuration={600}
              rippleRadius={85}
              color='dark'
              className='mt-2 me-3'
              onClick={handleNavigate}>
              View resume
            </MDBBtn>
            <MDBBtn
              tag={'button'}
              rounded
              rippleCentered
              rippleColor='light'
              rippleDuration={600}
              rippleRadius={85}
              color='dark'
              className='mt-2'
              onClick={handleGoBack}>
              Go back
            </MDBBtn>
          </>
        )}
      </MDBCol>
    </MDBRow>
  );
};

export default ViewResume;
