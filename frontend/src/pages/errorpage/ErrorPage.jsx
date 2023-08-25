import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Error from '../../components/error/Error';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };
  return (
    <MDBContainer>
      <MDBRow className='justify-content-center'>
        <MDBCol lg={8} md={8} sm={11} className='col-12'>
          <Error />
        </MDBCol>
      </MDBRow>
      <MDBContainer className='hstack justify-content-center mt-5'>
        <MDBBtn
          tag={'button'}
          color='dark'
          rounded
          rippleCentered
          rippleColor='light'
          rippleDuration={600}
          rippleRadius={65}
          onClick={handleGoBack}>
          Go back
        </MDBBtn>
      </MDBContainer>
    </MDBContainer>
  );
};

export default ErrorPage;
