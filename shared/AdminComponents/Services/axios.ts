import axios from "axios";
const baseURL = "/api"



const instanceAxios = axios.create({
    baseURL,
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
    }
});



export type FormRegister = {
    email: string | undefined;
    password: string | undefined;
    fullname?: string | undefined;
    username?: string | undefined;
};

//! LOGIN

export const completeLogin = async (form:FormRegister) => {
    try{
        const response = await instanceAxios.post("/auth/signin", form);
        return response
    }catch(error){
   
       console.log(error);
        
    }
}


// //!category

// export type FormCategory = {
//     name: string | undefined;
//     slug: string |undefined;
//     img_url: string | undefined
  
// }

// export const category = async( form:FormCategory) =>{
//     try{const response = await instanceAxios.post("/category")}
// }