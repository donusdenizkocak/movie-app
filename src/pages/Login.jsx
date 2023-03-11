import React from "react";

const Login = () => {
   
    return (
      <div className="d-flex justify-content-center">
        
          <div className="form-image">
            <img src="" alt="" />
          </div>
        
        <div className="register-form">
          <h1 className="form-title display-3">Login</h1>
          <form id="register" >
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email adress.."
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password.."
                required
              />
            </div>
            <div className="link">
              Forgot password?
            </div>
            <input
              type="submit"
              className="btn btn-primary form-control"
              value="Login"
              // onSubmit={handleSubmit}
            />
          </form>
          <button
            className="btn btn-primary form-control"
          >
            Continue with Google
          </button>
        </div>
      </div>
    );
  };
  
  export default Login;