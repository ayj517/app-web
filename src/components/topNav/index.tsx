import React from 'react'
import  './index.scss';


const topNav = () =>{
    return(
        <div className="nav-box">
            <nav>
                <div className="logo">
                    <img src="" alt=""/>
                </div>
                <div className="nav-right">
                    <ul className="nav-meun">
                        <li>
                            <i className="nav-icon"></i>
                            <span className="nav-name"></span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}

export default topNav