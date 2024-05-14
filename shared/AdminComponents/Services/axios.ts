import axios from "axios";
import { error } from "console";
const baseURL = "/api"



const instanceAxios = axios.create({
    baseURL,
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
    }
});

export type Form = {
    name: string | undefined;
    slug: string |undefined;
    img_url: string | undefined
  
}



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
        alert("Chek your infomation!")
   
       console.log(error);
        
    }
}


// //!category



export async function getCategories () {
    try{const response = await instanceAxios.get("/category")

    return response

    }catch{error}(
        console.log(error)
        
    )
}