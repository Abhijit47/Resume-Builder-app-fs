import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';
import HomeLogo from '../../components/homelogo/HomeLogo';

const HomePage = () => {
  const navigate = useNavigate();
  const handleCreateResume = () => {
    navigate('/create-resume');
  };

  const handleViewResume = () => {
    navigate('/view-resume');
  };
  return (
    <MDBContainer tag={'div'} className='h-100 mt-4'>
      <MDBRow tag={'div'} className='justify-content-center'>
        <MDBCol tag={'div'} lg={12} xl={11}>
          <MDBCard tag={'div'} shadow='5' className='text-black rounded-4'>
            <MDBCardBody tag={'div'} className='p-0'>
              <MDBRow className='justify-content-center'>
                <MDBContainer className='m-auto col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
                  <MDBTypography
                    variant='h3'
                    className='text-center fw-bold mb-5 mx-1 mx-md-4 mt-4'>
                    Résumé Builder App
                  </MDBTypography>
                  <MDBContainer tag={'div'} className='hstack flex-column'>
                    <MDBBtn
                      tag={'button'}
                      rounded
                      rippleCentered
                      rippleColor='light'
                      rippleDuration={600}
                      rippleRadius={85}
                      color='dark'
                      onClick={handleCreateResume}>
                      Create your own resume
                    </MDBBtn>
                    <MDBBtn
                      tag={'button'}
                      rounded
                      rippleCentered
                      rippleColor='light'
                      rippleDuration={600}
                      rippleRadius={85}
                      color='dark'
                      outline='dark'
                      className='shadow-4-strong mt-3'
                      onClick={handleViewResume}>
                      View your own resume
                    </MDBBtn>
                  </MDBContainer>
                </MDBContainer>
                <MDBContainer
                  tag={'div'}
                  className='col-md-8 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
                  <HomeLogo />
                </MDBContainer>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default HomePage;
