import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"
import axios from "axios";

export const login = (email,password)=> async(dispatch)=>{
    try{
        dispatch({type: USER_LOGIN_REQUEST});

        const config = {
            headers: {
                "content-type":"application/json"
            }
           };
    
           const {data} = await axios.post("https://taskmanager-tvsg.onrender.com/api/v1/user/login", {
            email,
            password
          }, config);
          
          dispatch({type: USER_LOGIN_SUCCESS, payload: data});
          localStorage.setItem('userinfo', JSON.stringify(data));
    }catch(error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
    }
}; 

export const logout = () => async(dispatch) => {
    localStorage.removeItem("userinfo");
    dispatch({type: USER_LOGOUT}); 
};

export const register = (name, email, password, confirmpassword) => async(dispatch)=>{
    try{
        dispatch({type: USER_REGISTER_REQUEST});

        const config = {
            headers: {
                "content-type":"application/json"
            }
           }
           
           const { data } = await axios.post('https://taskmanager-tvsg.onrender.com/api/v1/user/register',{
            name,
            email,
            password,
            confirmpassword
           }, config)

           dispatch({type: USER_REGISTER_SUCCESS, payload:data});
           dispatch({type: USER_LOGIN_SUCCESS, payload: data});
           
           localStorage.setItem('userinfo', JSON.stringify(data));   
    }catch(error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
           ? error.response.data.message
           : error.message
      });
    }
}