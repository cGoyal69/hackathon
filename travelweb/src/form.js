import React,{ useState } from "react";
export function Form()
{
    return (
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="user-box">
                <input type="text" name="" required=""/>
                <label>Username</label>
                </div>
                <div className="user-box">
                <input type="password" name="" required=""/>
                <label>Password</label>
                </div>
                <div className="user-box">
                <input type="password" name="" required=""/>
                <label>Password</label>
                </div>
                <div className="user-box">
                <input type="password" name="" required=""/>
                <label>Password</label>
                </div>
                <div className="user-box">
                <input type="password" name="" required=""/>
                <label>Password</label>
                </div>
                <label for="appt">Select a time:</label>
                <input type="time" id="appt" name="appt"/>
                
                <a href="chutiya.com">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
                </a>
                
            </form>
            </div>
    );
}