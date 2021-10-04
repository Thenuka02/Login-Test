//import logo from './logo.svg';
//import './App.css';

import React from 'react';

import SignInPage from './components/SignIn/SignInPage';
import hcbgImage from './components/image/bg2.jpg'


function App() {
  return (
    
    <div
    class="bg_image"
    style={{
      backgroundImage: `url(${hcbgImage})`,
      backgroundSize: "cover",
      height: "100vh",
      width: "150vh",
      color: "#f5f5f5"
    }}
  >

      <SignInPage />
    </div>
  );
}

export default App;
