import axios from "axios";
import {loginStart , loginSuccess , loginFailure , logout} from "./UserReducer";
import { useSelector}  from 'react-redux'
 
export const login = async(dispatch , user)=>{
          dispatch(loginStart());
          try {
                   const res = await axios.post("http://localhost:5000/api/user/login" , user);
                   dispatch(loginSuccess(res.data)); 
          } catch (error) {
                    dispatch(loginFailure());
          }
}

export const createuser = async(dispatch , user)=>{

          dispatch(loginStart());
          try {
                   const res = await axios.post("http://localhost:5000/api/user/create/user" , user);
                   dispatch(loginSuccess(res.data)); 
          } catch (error) {
                    dispatch(loginFailure());
          }
}

export const createpost = async(dispatch , formData)=>{
    alert(2);
    console.log('Formdata',formData);
    console.log('User',formData.get('single_input'));
            
          try {
                   const res = await axios.post("http://localhost:5000/api/post/createpost" , formData, {
                    headers: {
                      "Content-Type": "multipart/form-data",
                      
                    }});
                   console.log(res);
          } catch (error) {
                    console.log('Post upload error',error);
          }
}



// export const VerifyEmail = async(dispatch , user)=>{
//           dispatch(loginStart());
//           try {
//                    const res = await axios.post("http://139.144.12.15:80/api/user/verify/email" , user);
//                    dispatch(loginSuccess(res.data)); 
//           } catch (error) {
//                     dispatch(loginFailure());
//           }
// }


// export const signup = async(dispatch , user)=>{
//           dispatch(loginStart());
//           try {
//                    const res = await axios.post("http://139.144.12.15:80/api/user/create/user" , user);
//                    dispatch(loginSuccess(res.data)); 
//           } catch (error) {
//                     dispatch(loginFailure());
//           }
// }