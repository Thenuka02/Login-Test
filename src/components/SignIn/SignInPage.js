import React from 'react';



//import Card from '../UI/Card';
//import  classes from './SignInPage.module.css';
//import Button from '../UI/Button';
//import Logo from '../../image/loginsam1.jpg'
//import './login.css';
import {ReactComponent as Logo} from '../../image/icons8-contacts.svg'
import hcbgImage from '../../image/bg2.jpg';
import {ReactComponent as FB} from '../../image/icons8-facebook.svg'
import {ReactComponent as INSTA} from '../../image/icons8-instagram.svg'
import {ReactComponent as LINKEDIN} from '../../image/icons8-linkedin.svg'


import './loginPage.css';

const SignInPage = props => {
    const addUserHandler = (event) =>{
        event.preventDefault();
    };
 
    return (
       <div class="wrapper">
        <div className='main-image'>
            <img src={hcbgImage} alt='nature' />
         </div> 
           
            <div>
            <div className='div-login'>
                <div className='logo'> 
                 <Logo />
             </div>
            <h1 className='h1'> Sign In</h1>
           
            <form onSubmit={addUserHandler}>
               
            
            <input  type="email" name="email"  placeholder="Enter Email" /><br/>
            <input type="password" name="password" placeholder="Enter Password" /> <br/>
            
            <button type="submit" text-align="center">SIGN IN</button>
            <div className='link'>
            <a  href="#">Forgot password?</a> 
            </div>
            <div className="link2">
            <a  href="#">Don't have an account? </a>
            </div>
            <div className="link3">Copyright ©
            <a  href="#"> My website </a> 2021
            </div>
            <div className='footer' >
                < FB /> 
                < INSTA />
                < LINKEDIN /> 
            </div>  
            
        </form>
        </div>
       </div>
       </div>
    
     
        
    )
}

export default SignInPage;