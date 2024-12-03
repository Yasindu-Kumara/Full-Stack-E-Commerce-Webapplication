import React from 'react'
import "./CSS/LoginSignup.css"

export const LoginSignup = () => {
  return (
    <div class="loginsignup">
      <div class="logingsignup-container">
        <h3>Sign Up</h3>
        <div class="loginsignup-fields">
        <input type="text" placeholder='Your Name' />
        <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p class="loginsignup-login">Already have an account? <span>Login</span></p>
        <div class="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
