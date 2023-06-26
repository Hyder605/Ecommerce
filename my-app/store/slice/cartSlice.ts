import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface CartItem {
  product: any;
  quantity:number
  totalPrice:number
} 

export interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addToCart:(state:CartState,action:PayloadAction<{ product: any,quantity:number}>)=>{
    const newItem = action.payload;
    const existingItem = state.items.find(
      (item) => item.product._id === newItem.product._id
    );
    console.log(existingItem)
    state.totalQuantity = state.totalQuantity + action.payload.quantity;
    state.totalAmount =state.totalAmount + action.payload.quantity *action.payload.product.price

    
    if (!existingItem) {
      state.items.push({
        ...newItem,
        quantity: action.payload.quantity,
        totalPrice:action.payload.quantity*newItem.product.price
      });
    } else {
      const totalPrice =
        existingItem.totalPrice +
        existingItem.product.price * action.payload.quantity;
      existingItem.quantity += action.payload.quantity;
      existingItem.totalPrice = totalPrice;
    }
  },
    removeItemFromCart:(state: CartState, action: PayloadAction<string>)=> {
      const productSlug = action.payload;
      const existingItem = state.items.find(
        (item) => item.product._id === productSlug
      );

      state.totalQuantity--;

      state.totalAmount =state.totalAmount -existingItem?.product.price;
      existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem?.product.price;

      // if (existingItem?.quantity === 1) {
      //   state.items = state.items.filter(
      //     (item) => item.product._id !== productSlug
      //   );
      // } else {
      //   existingItem!.quantity;
      //   existingItem!.totalPrice =
      //     existingItem!.totalPrice - existingItem?.product.price;
      // }
    }



  }
})

// Action creators are generated for each case reducer function
export const { addToCart,removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer