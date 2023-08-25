import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBValidationItem,
} from 'mdb-react-ui-kit';

const UserInfo = ({ userData, setUserData }) => {
  // for handle input fields
  const handleUserInfo = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <MDBContainer tag={'div'} className=''>
      {/* name */}
      <MDBRow tag={'div'} className='mb-3 justify-content-center'>
        <MDBCol
          tag={'div'}
          lg={4}
          md={4}
          sm={11}
          className='col-12 mb-lg-0 mb-md-0 mb-sm-3 mb-3'>
          <MDBValidationItem feedback='Enter your first name' invalid>
            <MDBInput
              label='First name'
              id='firstname'
              type='text'
              name='firstname'
              placeholder='your first name'
              value={userData.firstname}
              onChange={handleUserInfo}
              required
              minLength={3}
              maxLength={32}
            />
          </MDBValidationItem>
        </MDBCol>
        <MDBCol tag={'div'} lg={4} md={4} sm={11} className='col-12'>
          <MDBValidationItem feedback='Enter your last name' invalid>
            <MDBInput
              label='Last name'
              id='lastname'
              type='text'
              name='lastname'
              placeholder='your last name'
              value={userData.lastname}
              onChange={handleUserInfo}
              required
              minLength={3}
              maxLength={32}
            />
          </MDBValidationItem>
        </MDBCol>
      </MDBRow>
      {/* email, phone */}
      <MDBRow tag={'div'} className='mb-3 justify-content-center'>
        <MDBCol
          tag={'div'}
          lg={4}
          md={4}
          sm={11}
          className='col-12 mb-lg-0 mb-md-0 mb-sm-3 mb-3'>
          <MDBInput
            label='Email'
            id='email'
            type='email'
            name='email'
            placeholder='your vaild email'
            autoComplete='on'
            value={userData.email}
            onChange={handleUserInfo}
            required
          />
        </MDBCol>
        <MDBCol tag={'div'} lg={4} md={4} sm={11} className='col-12'>
          <MDBInput
            label='Phone'
            id='phone'
            type='tel'
            name='phone'
            placeholder='your valid mobile no.'
            autoComplete='on'
            value={userData.phone}
            onChange={handleUserInfo}
            required
            minLength={10}
            maxLength={10}
          />
        </MDBCol>
      </MDBRow>
      {/* address */}
      <MDBRow tag={'div'} className='mb-3 justify-content-center'>
        <MDBCol tag={'div'} lg={8} md={8} sm={11} className='col-12'>
          <MDBInput
            label='Address'
            id='address'
            name='address'
            type='text'
            autoComplete='on'
            placeholder='your address'
            value={userData.address}
            onChange={handleUserInfo}
            minLength={3}
            maxLength={30}
            required
          />
        </MDBCol>
      </MDBRow>
      {/* profession portfolio */}
      <MDBRow tag={'div'} className='mb-3 justify-content-center'>
        <MDBCol
          tag={'div'}
          lg={4}
          md={4}
          sm={11}
          className='col-12 mb-lg-0 mb-md-0 mb-sm-3 mb-3'>
          <MDBInput
            label='Profession'
            id='profession'
            name='profession'
            type='text'
            placeholder='your profession'
            value={userData.profession}
            onChange={handleUserInfo}
            className='has-validation'
            minLength={3}
            maxLength={30}
            required
          />
        </MDBCol>
        <MDBCol tag={'div'} lg={4} md={4} sm={11} className='col-12'>
          <MDBInput
            label='Portfolio URL'
            id='portfolioUrl'
            name='portfolioUrl'
            type='url'
            placeholder='URL with https or http'
            value={userData.portfolioUrl}
            onChange={handleUserInfo}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default UserInfo;
