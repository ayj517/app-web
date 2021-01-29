import React from 'react'
import  './index.scss';


const topNav = () =>{
    return(
        <div className="nav-box">
            <nav>
                <div className="logo">
                    <img  src={require('./img/logo.png')}  alt=""/>
                </div>
                <div className="nav-right">
                    <ul className="nav-meun">
                        <li>
                            <i className="icon-game"></i>
                            <span className="nav-name">游戏</span>
                        </li>
                        <li>
                            <i className="icon-app"></i>
                            <span className="nav-name">应用</span>
                        </li>
                        <li>
                            <i className="icon-new"></i>
                            <span className="nav-name">最新</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default topNav