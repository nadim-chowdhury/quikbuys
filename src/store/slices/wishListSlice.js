import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishListItems: [
    {
      id: 1,
      name: "WishList Product 1",
      price: 120,
      image: "/products/jewellery-1.jpg",
    },
    {
      id: 2,
      name: "WishList Product 2",
      price: 180,
      image: "/products/jewellery-2.jpg",
    },
  ],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      state.wishListItems.push(action.payload);
    },
    removeFromWishList: (state, action) => {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearWishList: (state) => {
      state.wishListItems = [];
    },
  },
});

export const { addToWishList, removeFromWishList, clearWishList } =
  wishListSlice.actions;
export default wishListSlice.reducer;
