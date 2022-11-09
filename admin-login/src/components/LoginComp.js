import React, { Component } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import FunctionalComp from './FunctionalComp';

 class LoginComp extends Component {
  render() {
    return (  <MDBContainer className="my-5">

    <MDBCard>
      <MDBRow className='g-0'>

        <MDBCol md='6'>
          <MDBCardImage src='./branding.png' alt="login form" className='rounded-start w-100 h-100 '/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBCardBody className='d-flex flex-column'>

            <div className='d-flex flex-row mt-2'>
              <MDBIcon fas icon="users fa-3x me-3" style={{ color: '#751592' }}/>
              <span className="h2 fw-bold mb-0 m-0"> Welcome Stunners</span>
            </div>

            <h5 className="fw-normal ms-2 my-4 pb-3" style={{letterSpacing: '1px'}}>Create account</h5>

              <MDBInput wrapperClass='mb-4' label='Full name' id='formControlLg' type='text' size="lg"/>
              <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

            <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Sign up</MDBBtn>
           
            <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already have an account? <a href={FunctionalComp} style={{color: '#393f81'}}>Login here</a></p>

            <div className='d-flex flex-row justify-content-start'>
              <a href="#!" className="small text-muted me-1">Terms of use.</a>
              <a href="#!" className="small text-muted">Privacy policy</a>
            </div>

          </MDBCardBody>
        </MDBCol>

      </MDBRow>
    </MDBCard>

  </MDBContainer>

      
    )
  }
}

export default LoginComp