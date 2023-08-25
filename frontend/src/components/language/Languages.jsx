import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBSwitch,
  MDBTypography,
} from 'mdb-react-ui-kit';

const Languages = ({ language, setLanguage }) => {
  // for handle lanuages
  const handleLanguages = (ev) => {
    const { value, checked } = ev.currentTarget;
    const { languages } = language;

    if (checked) {
      setLanguage({
        languages: [...languages, value],
      });
    } else {
      setLanguage({
        languages: languages.filter((ev) => ev !== value),
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
            Languages
          </MDBTypography>
          <MDBRow className='gx-0 justify-content-lg-between justify-content-md-between justify-content-sm-center justify-content-center gap-2 p-2'>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='english'
                label='English'
                value={'english'}
                onChange={handleLanguages}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='hindi'
                label='Hindi'
                value={'hindi'}
                onChange={handleLanguages}
              />
            </MDBCol>
            <MDBCol lg={3} md={3} sm={6} className='col-4'>
              <MDBSwitch
                id='other'
                label='Other Language'
                value={'other language'}
                onChange={handleLanguages}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBCol>
    </MDBRow>
  );
};

export default Languages;
