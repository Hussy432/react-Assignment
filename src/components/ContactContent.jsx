import React from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik, } from 'formik';
import * as Yup from 'yup';

export default function ContactContent() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            username: "",
            email:"",
            pasword:""
        },
        validationSchema:Yup.object({
            username:Yup.string().max(8,"userName Must be Less than 8 letters").required("this is required"),
            email:Yup.string().email("Invalid email address").required()
            
        }),
        
        onSubmit:(values)=>{
          
console.log("form submitted",values)
navigate("/Home")
        },
        
        
        
        
       
    })
    
    
    
    
  return (
    <div>
      <form style={{textAlign:'center'}} onSubmit={formik.handleSubmit}>
        <h1>Login Form</h1>
<label style={{backgroundColor:'black', color:"white", fontSize:'large'}} htmlFor="userName">User Name  :</label>
<input id='userName' type="text" name='username' placeholder='Enter User Name' onChange={formik.handleChange} value={formik.values.username} />
<br/>
<label style={{backgroundColor:'black', color:"white", fontSize:'large'}} htmlFor="email">email Id  :</label>
<input id='email' type="email" name='email' placeholder='Enter email' onChange={formik.handleChange} value={formik.values.email} />
<br/>
<textarea placeholder='Write Your Querries'>

</textarea>
<br/>


          
      
             <button style={{backgroundColor:'black', color:'white'}} type='submit'  >submit</button>
             
      </form>
    </div>
  )
}

