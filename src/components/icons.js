import React from "react";
import "./icons.css";

function Icons()
{
    return(
        <div className = "icons_con">

            <div className = "icons">
                <span className="line1">Hello user</span>
                <span className="line2">Sign In</span>
            </div>

            <div className = "icons">
                <span className="line1">Returns</span>
                <span className="line2">& Orders</span>
            </div>

            <div className = "icons">
                <span className="line1">Your</span>
                <span className="line2">Membership</span>
            </div>

        </div>
    )
}
export default Icons;