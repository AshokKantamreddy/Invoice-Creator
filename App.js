import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import Invoices from './components/Invoices/Invoices';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const router=createBrowserRouter([{path:"/", element:<Invoices/>},{path:"/invoiceForm",element:<InvoiceForm/>}])


class App extends Component {
  render() {
  // return (
  //   <div className="App d-flex flex-column align-items-center justify-content-start w-100 p-5 h-100">
  //     <Container>
  //       <Invoices/>
  //       {/* <InvoiceForm/> */}
      
  //       </Container>
  //   </div>
  // );
  return <RouterProvider router={router}/>
}}

export default App;
