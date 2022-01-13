import React from 'react'

export default function Navbar(props) {
    return (
        <>
        <nav id="nav">
                    <div id='logo'>PeerLink</div>
                    <ul type="none">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Download</a></li>
                       
                    </ul>
                    <div className="navLeft">
                        <button className='butt'>{props.val}</button>
                        <img src="" alt="" />
                    </div>
                </nav>
            
        </>
    )
}
