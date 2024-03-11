import { createSlice } from '@reduxjs/toolkit'

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState: {
    listOfinvoices: [{id:1,name:"invoice1"},{id:2,name:"invoice2"}],
  },
  reducers:{
    creteInvoice:(state,action)=>{
      console.log("reducing checking...",action.payload)
      const newInvoice={
        info:action.payload.info
      }
      state.listOfinvoices.push(newInvoice)
        
    
    }
    

    
  }
  
})

export default invoiceSlice
