import React from 'react';

import Card from '../UI/Card';
import  classes from './SignInPage.module.css';
import Button from '../UI/Button';
import Logo from '../../components/image/signup.png'

const SignInPage = props => {
    const addUserHandler = (event) =>{
        event.preventDefault();
    };
    return (
       <Card >
        <form onSubmit={addUserHandler}>
            <div className='div-login-Logo'> 
            <img src={Logo} alt='Logo'></img> </div>
            <h1> Sign In</h1>
            <input className={classes.input} type="email" name="email"  placeholder="example@gmail.com" /><br/>
            <input className={classes.input} type="password" name="password" placeholder="Enter Password" /> <br/>
            <div class="checkboxy">
                <input name="cecky" id="checky" value="1" type="checkbox" /><label class="terms">Remember me</label>
            </div>
            <Button type="submit">SIGN IN</Button>
        </form>
       </Card>
    );

};

export default SignInPage;