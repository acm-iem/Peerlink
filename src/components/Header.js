import React from 'react';
import login from '../login.png'
export default function Header() {
    return (
        <>
        <section id="top">
            <div className="container">
                <div className="flex">
                    <div id="left">
                        <p id="para">WELCOME TO peerLink !</p>
                        <p id="para">FIND ALL YOUR NEEDS IN ONE PLATFORM</p>
                    </div>
                    <div className="right">
                        <div id="img">
                            <img src={login} alt="sorry" />
                        </div>
                        <div id="signin">
                            <button id="btn">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="navigation">
            <div className="container">
                <nav id="nav">
                    <ul type="none">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Rewards</a></li>
                    </ul>
                    <div className="navLeft">
                        <input type="text" name="search" id="search" placeholder="Help"/>
                    </div>
                </nav>
            </div>
        </section>
        </>
    )
}