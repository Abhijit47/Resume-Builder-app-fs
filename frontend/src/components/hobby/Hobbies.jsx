import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBSwitch,
  MDBTypography,
} from 'mdb-react-ui-kit';

const Hobbies = ({ hobby, setHobby }) => {
  // for handle hobbies
  const handleHobbies = (ev) => {
    const { value, checked } = ev.currentTarget;
    const { hobbies } = hobby;

    if (checked) {
      setHobby({
        hobbies: [...hobbies, value],
      });
    } else {
      setHobby({
        hobbies: hobbies.filter((ev) => ev !== value),
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
            Hobbies
          </MDBTypography>
          <MDBRow className='gx-0 justify-content-lg-between justify-content-md-between justify-content-sm-center justify-content-center gap-2 p-2'>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='music'
                label='Listen to music'
                value={'listen to music'}
                onChange={handleHobbies}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='travel'
                label='Travelling'
                value={'travelling'}
                onChange={handleHobbies}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='reading'
                label='Reading books'
                value={'reading books'}
                onChange={handleHobbies}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='sports'
                label='Sports'
                value={'sports'}
                onChange={handleHobbies}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='yoga'
                label='Yoga'
                value={'yoga'}
                onChange={handleHobbies}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='meditation'
                label='Meditation'
                value={'meditation'}
                onChange={handleHobbies}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBCol>
    </MDBRow>
  );
};

export default Hobbies;
