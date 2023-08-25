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

const Certificates = ({ certificates, setCertificates }) => {
  // Function to update a specific input object
  const updateInput = (index, field, value) => {
    const updatedInputs = [...certificates];
    updatedInputs[index][field] = value;
    setCertificates(updatedInputs);
  };

  // Function to add a new input object
  const addInput = () => {
    setCertificates([...certificates, { name: '', description: '', link: '' }]);
  };

  // Function to remove an input object
  const removeInput = (index) => {
    const updatedInputs = certificates.filter((_, i) => i !== index);
    setCertificates(updatedInputs);
  };

  return (
    <MDBContainer tag={'div'} className='vstack align-items-center gap-3 p-3'>
      <MDBTypography variant='h3'>Certificates</MDBTypography>
      {certificates.map((certificate, index) => (
        <MDBRow tag={'div'} key={index} className='justify-content-center p-2'>
          <MDBCol lg={6} tag={'div'} className='mb-2'>
            <MDBInput
              label='Certificate Name'
              id={`certificate_name_${index + 1}`}
              placeholder={`Certificate ${index + 1} Name`}
              type='text'
              value={certificates.name}
              onChange={(e) => updateInput(index, 'name', e.target.value)}
              required
            />
          </MDBCol>
          <MDBCol lg={6} tag={'div'} className='mb-2'>
            <MDBInput
              label='Certificate URL'
              id={`certificate_url_${index + 1}`}
              type='url'
              placeholder={`Certificate ${index + 1} URL`}
              value={certificates.link}
              onChange={(e) => updateInput(index, 'link', e.target.value)}
              required
            />
          </MDBCol>
          <MDBCol lg={10} tag={'div'} className='mb-2'>
            {/* <MDBInput
              label='Certificate Description'
              id={`certificate_desc_${index + 1}`}
              type='text'
              placeholder={`Certificate ${index + 1} Description`}
              value={certificates.description}
              onChange={(e) =>
                updateInput(index, 'description', e.target.value)
              }
            /> */}
            <MDBTextArea
              label='Certificate Description'
              id={`certificate_desc_${index + 1}`}
              rows={1}
              placeholder={`Certificate ${index + 1} Description`}
              value={certificates.description}
              onChange={(e) =>
                updateInput(index, 'description', e.target.value)
              }
              maxLength={30}
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
        className={`${certificates.length > 0 ? 'd-none' : 'd-block'}`}
        rounded
        rippleCentered
        rippleColor='light'
        rippleRadius={35}
        rippleDuration={300}
        onClick={addInput}>
        Add Certificates
      </MDBBtn>
    </MDBContainer>
  );
};

export default Certificates;
