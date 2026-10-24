import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from "@/types/product.type";
import { AppDispatch } from '../store';
import { productService } from '@/services/product.service';

type ProductState = {
    items: ProductType[],
    loading: boolean
}

const initialState : ProductState = {
    items: [],
    loading: false
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems:(state, action:PayloadAction<ProductType[]>)=>{
      state.items = action.payload;
    },
    setLoading:(state,action:PayloadAction<boolean>)=>{
      state.loading = action.payload
    }
  }
});

export const {setItems,setLoading} = productSlice.actions
export default productSlice.reducer

//  action  
export const fetchProducts = ()=>{
  return async (dispatch: AppDispatch)=>{
    dispatch(setLoading(true))
    try{
      const response = await productService.getProducts();
      // lấy kết quả đưa cho setItems của productSlice 
      dispatch(setItems(response));

    }catch(error){
      console.error(error);
    }finally{
      dispatch(setLoading(false))
    }
  }
}