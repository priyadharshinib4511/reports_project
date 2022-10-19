import { Card, Col, Row } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import Home from '../Home';
import Reports from '../Reports';
import './style.css';
function ACSPage(selectedPage) {
  // const {id} = useParams()
  // console.log('params--->', id);

  // return (
  //   <div className="ACSPage-main">
  //     <div className="ACSPage-sub">
  //       {/* <Col>
  //       <Card className='card-style' style={{
  //           width: 350,
  //         }} bordered={true}>
  //           <div className='card-title'>
  //             Open Projects 
  //           </div>
  //           <div className='card-data' >
  //             Card content
  //           </div>
  //         </Card>
  //       </Col>
  //       <Col>
  //         <Card className='card-style' style={{
  //           width: 350,
  //         }} bordered={true}>
  //           <div className='card-title'>
  //             Projects Overview
  //           </div>
  //           <div className='card-data' >
  //             Card content
  //           </div>
  //         </Card>
  //       </Col>
  //       <Col>

  //       <Card className='card-style' style={{
  //           width: 500,
  //         }} bordered={true}>
  //           <div className='card-title'>
  //           Formula detailed view
  //           </div>
  //           <div className='card-data' >
  //             Card content
  //           </div>
  //         </Card>
  //       </Col> */}
  //       {/* </Row> */}
  //     </div>
  //     <div>
  //     {/* <Row>
  //         <Card className='card-style' style={{
  //             width: 1240,
  //           }} bordered={true}>
  //             <div className='card-data' >
  //               Card content
  //             </div>
  //           </Card>
  //         </Row> */}
  //     </div>

  //   </div>
  // );

  // return(

  // )

  // return (
  //   <div style={{display: 'flex'}}>
  //     <h1>Welcome</h1>
  //     {
  //       selectedPage === '1' ? <Home /> : selectedPage === '2' ? <Reports /> : null
  //       }
  //   </div>

  // )
}

export default ACSPage;
