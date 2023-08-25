import React from 'react';
import { MDBCol, MDBContainer, MDBInputGroup, MDBRow } from 'mdb-react-ui-kit';

const SocialHandles = ({ socialMediaHandles, setSocialMediaHandles }) => {
  // for handle socialHandles
  const handleSocialHandler = (ev) => {
    const { name, value } = ev.currentTarget;
    setSocialMediaHandles({ ...socialMediaHandles, [name]: value });
  };

  return (
    <MDBContainer>
      <MDBRow className='mb-3 justify-content-center'>
        <MDBCol
          lg={4}
          md={4}
          sm={11}
          className='col-12 mb-lg-0 mb-md-0 mb-sm-3 mb-3'>
          <MDBInputGroup textBefore='Github'>
            <input
              className='form-control'
              id='github'
              label='Github'
              name='github'
              type='text'
              placeholder='Github profile name'
              value={socialMediaHandles.github}
              onChange={handleSocialHandler}
              required
            />
          </MDBInputGroup>
        </MDBCol>
        <MDBCol lg={4} md={4} sm={11} className='col-12'>
          <MDBInputGroup className='mb-3' textBefore='LinkedIn'>
            <input
              className='form-control'
              id='linkedin'
              name='linkedIn'
              type='text'
              placeholder='LinkedIn profile name'
              value={socialMediaHandles.linkedIn}
              onChange={handleSocialHandler}
              required
            />
          </MDBInputGroup>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SocialHandles;
