import { PayloadAction,createSlice } from "@reduxjs/toolkit";


export interface CategoryItem {
    name: string | undefined;
  slug: string | undefined;
  img_url: string | undefined;
}


interface CategoryState {
    category:CategoryItem[]
}


const initialState:CategoryState = {
    category:[],
   
}

console.log(initialState);




export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers:{
            fillCategory:(state, action:PayloadAction<CategoryItem[]>) =>{
                state.category = [...action.payload]
            }
 

    }
})


export const { fillCategory} = globalSlice.actions

export default globalSlice.reducer












