<div className='row d-flex justify-content-center align-items-center h-100'>
  <div className='col-lg-12 col-xl-11'>
    <div
      className='card text-black shadow-4-strong'
      style={{ borderRadius: '25px' }}>
      <div className='card-body'>
        <div className='row justify-content-center'>
          <MDBContainer className='m-auto col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1'>
            <MDBTypography
              variant='h3'
              className='text-center fw-bold mb-5 mx-1 mx-md-4 mt-4'>
              Resume Builder App
            </MDBTypography>
            <MDBRow tag={'div'} className='justify-content-center'>
              <MDBCol
                tag={'div'}
                lg={12}
                md={12}
                sm={12}
                className='p-2 text-center'>
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
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer className='col-md-8 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2'>
            {/* <img
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                      className='img-fluid'
                      alt='image_alt'
                    /> */}
            <HomeLogo />
          </MDBContainer>
        </div>
      </div>
    </div>
  </div>
</div>;