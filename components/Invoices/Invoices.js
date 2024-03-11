import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListOfInvoice from './ListOfInvoice';




const Invoices = () => {
  const navigate=useNavigate()

  
 
  return (
  <Row>
      <Col lg={12} md={8} height={100}>
        <Card p-5 p-xl-5 my-3 my-xl-4 lg={10}  className='h-100' style={{width:"100%", height:"100%"}} >
          {/* card-header */}
          <div className=' d-flex flex-row align-items-center justify-content-between'>
            <h1>Invoices</h1>
            <button onClick={()=>{
              navigate("/invoiceForm")
            }}>New inVoice</button>
          </div>

          {/* list of invoices */}

        <ListOfInvoice/>
        </Card>
        
      </Col>

    </Row>
  )
}

export default Invoices