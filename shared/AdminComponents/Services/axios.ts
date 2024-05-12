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