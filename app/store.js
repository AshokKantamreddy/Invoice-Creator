import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import invoiceSlice from "../features/invoiceSlice"

export default configureStore({
  reducer: {
    invoice:invoiceSlice.reducer
  },
});
