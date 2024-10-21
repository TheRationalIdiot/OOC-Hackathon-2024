import React from 'react';
import './LoginPage.css';  // Import the CSS file

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="welcome-text">Hello!<br />Welcome back.</h2>
        
        <form className="login-form">
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email address" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" />
            <span className="forgot-password">Forgot password?</span>
          </div>
          <button type="submit" className="btn btn-primary login-btn">Log In</button>
        </form>
        
        <p className="signup-text">You don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
