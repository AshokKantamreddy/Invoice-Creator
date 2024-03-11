import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import EmptyList from './EmptyList';
import ListItem from './ListItem';






const ListOfInvoice = () => {
  const lstOfinvoices=useSelector(state=>state.invoice)

  const isEmpty= ListOfInvoice.lenght===0
   console.log(lstOfinvoices)
  return(
    <>
    {isEmpty && <EmptyList/>}
    {!isEmpty &&(
        lstOfinvoices.listOfinvoices.map(item=><ListItem item={item}/>)
        
        
        )}
    </>
    








  )
}

export default ListOfInvoice