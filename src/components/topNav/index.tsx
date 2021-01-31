import React from 'react';
import './index.scss';

const topNav = () => {
  return (
    <div className="nav-box">
      <nav>
        <a className="logo" href="/games/game_action/1">
          <img src={require('./img/logo.png')} alt="" />
        </a>
        <div className="nav-right">
          <ul className="nav-meun">
            {/* <li>
              <a href="/game">
                <i className="icon-game"></i>
                <span className="nav-name">游戏</span>
              </a>
            </li> */}
            <li>
              <a href="/games/game_action/1">
                <i className="icon-app"></i>
                <span className="nav-name">应用</span>
              </a>
            </li>
            {/* <li>
              <a href="">
                <i className="icon-new"></i>
                <span className="nav-name">最新</span>
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default topNav;
