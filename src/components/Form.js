import React from 'react';
export default function Header() {
    return (
        <div id="mid">  
        <div className="container">
            <div id="formBody">
                <p className="para1">CREATE ACCOUNT</p>
                <form action="#">
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Repeat password"/>
                    <input type="submit" placeholder="SING UP"/>
                </form>
            </div>
            </div>
        </div>
    )
}