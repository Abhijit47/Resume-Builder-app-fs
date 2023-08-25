import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { toast } from 'react-hot-toast';
import _ from 'lodash';
import { ClockLoader, HashLoader } from 'react-spinners';

import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';

const Resume = () => {
  const [resumeData, setResumeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getResume = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          `${process.env.REACT_APP_YOUR_RESUME}/${id}`
        );

        if (res.status !== 200) {
          return toast.error('Something went wrong!');
        }

        if (_.isEmpty(res.data)) {
          return toast.error('Loading!');
        } else {
          setResumeData(res.data.data);
          toast.success(res.data.message, {
            duration: 4000,
            position: 'top-right',
          });
          setIsLoading(false);
        }
      } catch (err) {
        toast.error(err.response.data.message, {
          duration: 2500,
          position: 'top-left',
        });
        navigate('/view-resume');
      }
    };

    getResume();

    return getResume;
  }, [id, navigate]);

  // to generate pdf
  const generatePDF = async () => {
    const content = document.getElementById('contentToConvert'); // Change this to the ID of the content you want to convert
    const pdf = new jsPDF('p', 'mm', 'a4');
    try {
      const canvas = await html2canvas(content, {
        height: 1080,
        scale: 1,
      });
      // console.log(canvas);
      const imageData = canvas.toDataURL('image/png', 1.0);
      pdf.addImage(imageData, 'WEBP', 0, 0, 210, 297); // Adjust width and height as needed
      pdf.save(`${resumeData.firstname}-${resumeData.lastname} resume.pdf`);
    } catch (error) {
      toast.error('Error generating PDF:', {
        className: 'bg-danger text-light',
      });
    }
  };

  // if resumedata {} is empty or not
  if (_.isEmpty(resumeData)) {
    return (
      <MDBContainer tag={'div'} className='hstack justify-content-center mt-5'>
        <ClockLoader size={100} color='rosybrown' />
      </MDBContainer>
    );
  }

  // destructure data
  const {
    _id,
    certificates,
    education,
    email,
    firstname,
    hobbies,
    languages,
    lastname,
    phone,
    portfolioUrl,
    profession,
    projects,
    skills,
    socialMediaHandles,
  } = resumeData;

  return (
    <>
      {isLoading ? (
        <MDBContainer
          tag={'div'}
          className='hstack justify-content-center mt-5'>
          <HashLoader size={70} color='#36d7b7' />
        </MDBContainer>
      ) : (
        <>
          <div id='contentToConvert'>
            {/* Content to be converted to PDF */}
            {!_.isEmpty(resumeData) ? (
              <MDBContainer tag={'div'} fluid>
                <MDBContainer className=''>
                  <MDBTypography
                    variant='h1'
                    className='text-capitalize text-center fs-2'>
                    {firstname} {lastname}
                  </MDBTypography>
                  <MDBTypography
                    variant='h3'
                    className='text-capitalize text-center fs-4 fw-semibold'>
                    {profession}
                  </MDBTypography>
                  <MDBTypography className='text-center'>
                    <Link to={portfolioUrl}>
                      <MDBIcon
                        fas
                        icon='link'
                        iconType='solid'
                        size='sm'
                        color='dark'
                        className='me-2'
                      />
                      {portfolioUrl}
                    </Link>
                  </MDBTypography>
                </MDBContainer>

                <MDBContainer className='hstack justify-content-center gap-4'>
                  <Link to={`mailto:${email}`}>
                    <MDBIcon
                      fas
                      icon='envelope'
                      iconType='solid'
                      size='sm'
                      color='dark'
                      className='me-2'
                    />
                    {email}
                  </Link>
                  <Link to={`tel:${phone}`}>
                    <MDBIcon
                      fas
                      icon='phone'
                      iconType='solid'
                      size='sm'
                      color='dark'
                      className='me-2'
                    />
                    {phone}
                  </Link>
                  <Link to={`https://github.com/${socialMediaHandles.github}`}>
                    <MDBIcon
                      fab
                      icon='github'
                      size='sm'
                      color='dark'
                      className='me-2'
                    />
                    {socialMediaHandles.github}
                  </Link>
                  <Link
                    to={`https://www.linkedin.com/in/${socialMediaHandles.linkedIn}`}>
                    <MDBIcon
                      fab
                      icon='linkedin'
                      size='sm'
                      color='dark'
                      className='me-2'
                    />
                    {socialMediaHandles.linkedIn}
                  </Link>
                </MDBContainer>
                <hr />
                <MDBRow tag={'div'} className='gx-0 justify-content-center'>
                  {/* left */}
                  <MDBCol tag={'div'}>
                    {/* Skills */}
                    <MDBContainer className='gx-0 p-1'>
                      <MDBTypography className='fw-bold bg-success bg-gradient text-light p-1 rounded-2'>
                        Skills
                      </MDBTypography>
                      <MDBListGroup
                        tag={'ul'}
                        style={{ minWidth: '22rem' }}
                        light
                        small>
                        {skills.map((skill, i) => {
                          return (
                            <MDBListGroupItem
                              tag={'li'}
                              className='text-capitalize'
                              key={i + 1}>
                              {skill}
                            </MDBListGroupItem>
                          );
                        })}
                      </MDBListGroup>
                    </MDBContainer>
                    <hr />
                    {/* Projects */}
                    <MDBContainer className='gx-0 p-1'>
                      <MDBTypography className='fw-bold bg-success bg-gradient text-light p-1 rounded-2'>
                        Projects
                      </MDBTypography>
                      {projects.map((project, j) => {
                        return (
                          <MDBListGroup
                            tag={'ul'}
                            style={{ minWidth: '22rem' }}
                            light
                            small
                            key={j + 1}>
                            <div className='bg-dark opacity-60 text-light hstack justify-content-between p-1'>
                              <div className='text-capitalize'>
                                {project.name}
                              </div>
                              <div className='hstack gap-2'>
                                <Link to={`${project.url}`}>
                                  <MDBIcon
                                    fas
                                    icon='link'
                                    iconType='solid'
                                    className='text-light'
                                    size='sm'
                                  />
                                </Link>
                                <Link to={`${project.repoLink}`}>
                                  <MDBIcon
                                    fab
                                    icon='github'
                                    size='sm'
                                    className='text-light'
                                  />
                                </Link>
                              </div>
                            </div>

                            <MDBListGroupItem className='text-capitalize'>
                              {project.description}
                            </MDBListGroupItem>
                          </MDBListGroup>
                        );
                      })}
                    </MDBContainer>
                  </MDBCol>
                  {/* right */}
                  <MDBCol tag={'div'}>
                    {/* Education */}
                    <MDBContainer className='gx-0 p-1'>
                      <MDBTypography className='fw-bold bg-success bg-gradient text-light p-1 rounded-2'>
                        Education
                      </MDBTypography>
                      <span>{education.degreeName}</span>
                      <span>2023</span>
                      <p>{education.instituteName}</p>
                    </MDBContainer>
                    <hr />

                    {/* Certificates */}
                    <MDBContainer tag={'div'} className='gx-0 p-1'>
                      <MDBTypography className='fw-bold bg-success bg-gradient text-light p-1 rounded-2'>
                        Certificates
                      </MDBTypography>
                      {certificates.map((certificate, k) => {
                        return (
                          <MDBListGroup
                            tag={'ul'}
                            style={{ minWidth: '22rem' }}
                            light
                            small
                            key={k + 1}>
                            <div className='bg-secondary hstack justify-content-between p-1'>
                              <MDBTypography className='text-capitalize mb-0'>
                                {certificate.name}
                              </MDBTypography>
                              <div>
                                <span>
                                  <Link to={`${certificate.link}`}>
                                    <MDBIcon
                                      fas
                                      icon='link'
                                      iconType='solid'
                                      size='sm'
                                    />
                                  </Link>
                                </span>
                              </div>
                            </div>
                            {certificate.description === '' ? (
                              ''
                            ) : (
                              <MDBListGroupItem className='text-capitalize'>
                                {certificate.description}
                              </MDBListGroupItem>
                            )}
                          </MDBListGroup>
                        );
                      })}
                    </MDBContainer>
                    <hr />
                    {/* Hobbies */}
                    <MDBContainer tag={'div'} className='gx-0 p-1'>
                      <MDBTypography className='fw-bold bg-success bg-gradient text-light p-1 rounded-2'>
                        Hobbies
                      </MDBTypography>
                      <MDBListGroup
                        tag={'ul'}
                        style={{ minWidth: '22rem' }}
                        light
                        small>
                        {hobbies.map((hobby, n) => {
                          return (
                            <MDBListGroupItem
                              className='text-capitalize'
                              key={n + 1}>
                              {hobby}
                            </MDBListGroupItem>
                          );
                        })}
                      </MDBListGroup>
                    </MDBContainer>
                    <hr />

                    {/* Language */}
                    <MDBContainer tag={'div'} className='gx-0 p-1'>
                      <MDBTypography className='fw-bold bg-success bg-gradient text-light p-1 rounded-2'>
                        Languages
                      </MDBTypography>
                      <MDBListGroup
                        tag={'ul'}
                        style={{ minWidth: '22rem' }}
                        light
                        small>
                        {languages.map((languages, l) => {
                          return (
                            <MDBListGroupItem
                              className='text-capitalize'
                              key={l + 1}>
                              {languages}
                            </MDBListGroupItem>
                          );
                        })}
                      </MDBListGroup>
                    </MDBContainer>
                  </MDBCol>
                </MDBRow>
                <div className='hstack justify-content-end'>
                  <p>{_id}</p>
                </div>
              </MDBContainer>
            ) : (
              setIsLoading(true)
            )}
          </div>
          {/* Buttons */}
          <MDBContainer className='hstack justify-content-center gap-3 mb-3'>
            {_.isEmpty(resumeData) ? (
              <>
                <MDBBtn
                  tag={'button'}
                  color='dark'
                  rounded
                  disabled
                  rippleCentered
                  rippleColor='light'
                  rippleDuration={600}
                  rippleRadius={65}
                  onClick={generatePDF}>
                  Generate PDF
                </MDBBtn>
                <MDBBtn
                  tag={'button'}
                  color='dark'
                  rounded
                  rippleCentered
                  rippleColor='light'
                  rippleDuration={600}
                  rippleRadius={65}
                  onClick={() => navigate('/')}>
                  Go back
                </MDBBtn>
              </>
            ) : (
              <>
                <MDBBtn
                  tag={'button'}
                  color='dark'
                  rounded
                  rippleCentered
                  rippleColor='light'
                  rippleDuration={800}
                  rippleRadius={65}
                  onClick={generatePDF}>
                  Generate PDF
                </MDBBtn>
                <MDBBtn
                  tag={'button'}
                  color='primary'
                  rounded
                  rippleCentered
                  rippleColor='dark'
                  rippleDuration={600}
                  rippleRadius={65}
                  onClick={() => navigate('/')}>
                  Go back
                </MDBBtn>
              </>
            )}
          </MDBContainer>
        </>
      )}
    </>
  );
};

export default Resume;
