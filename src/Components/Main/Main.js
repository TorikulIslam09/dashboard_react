import React from 'react';
import { Outlet } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Leftsidebar from './Leftsidebar/Leftsidebar';
import Heder from '../Heder/Heder';

const Main = () => {
    return (
        <div>

{/* <Container> */}
        
      <Row>
   
        <Col lg={2} className='pe-0'>
            <Leftsidebar/>
        </Col>
        <Col lg={10} className='ps-0 '>
            <Heder/>
           <div className="main-container px-5 mt-3">
                <Outlet></Outlet>
           </div>
        </Col>
      </Row>
    
    {/* </Container> */}

            
        </div>
    );
};

export default Main;