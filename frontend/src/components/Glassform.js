import React from "react";
import Navbar from "./Navbar";

export default function Glassform() {
  return (
    <>
    <Navbar val="Sign Up"/>
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

            <p className="para1">Log In</p>
            <form action="#">
              <div className="inp">
              <input type="text" placeholder="Phone or Email"/>
              </div>
              <div className="inp">
              <input type="password" placeholder="Password" />
              </div>
              <div className="inp but">
              <input type="submit" value="Log In"/>
              </div>
              <div className="hyper">
              <p>Forgott Password? <a href="
              #">Click me</a></p>
              <p>Create a Account? <a href="
              #">Register</a></p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
