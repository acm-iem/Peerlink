import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Navbar(props) {
    const navigate = useNavigate();
    const setNav = () => {
        switch (props.val) {
            case "Login/Signup":
                navigate('/login')
                break;

            case "Log In":
                navigate('/login')
                break;

            case "Sign Up":
                navigate('/signup')
                break;
        
            default:
                break;
        }
      }
    
    return (
        <>
        <nav id="nav">
                    <div id='logo'>PeerLink</div>
                    <ul type="none">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/chat">Chat</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/download">Download</Link></li>
                       
                    </ul>
                    <div className="navLeft">
                        <button className='butt' onClick={setNav}>{props.val}</button>
                        <img src="" alt="" />
                    </div>
                </nav>
            
        </>
    )
}
