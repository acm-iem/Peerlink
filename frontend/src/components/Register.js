import React from 'react'
import Navbar from "./Navbar";
function Register() {
    return (
        <>
        <Navbar val="Log In"/>
      <div className="set">
        <div className="side">
            <div className="wel">
                <p>Welcome to </p>
                <p>PeerLink</p>
            </div>
        </div>
        <div className="logsec">
              


          <div className="logbody">

              <div className="glass" ></div>
              <div className="glass" ></div>
              <div className="glass" ></div>
              <div className="glass" ></div>
              <div className="glass" ></div>

            <p className="para2">Sign Up</p>
            <form action="#">
              <div className="inp">
              <input type="text" placeholder="Phone or Email"/>
              </div>
              <div className="inp">
              <input type="password" placeholder="Password" />
              </div>
              <div className="inp">
              <input type="password" placeholder="Confirm Password" />
              </div>
              <div className="inp but">
              <input type="submit" value="Sign Up"/>
              </div>
              <div className="hyper">
              
              <p>Already Have an Account? <a href="
              #">Log In</a></p>
              </div>

            </form>
          </div>
        </div>
      </div>
            
        </>
    )
}

export default Register
