import React from 'react';
import './index.scss';
import Stars from '@/components/stars';

const GameContent = () => {
  return (
    <div className="game-content">
      <div className="title">
        <h3>纸牌游戏</h3>
        <div className="slot">
          <span className="name">排序:</span>
          <ul>
            <li>热门</li>
            <li>热门</li>
            <li>热门</li>
            <li>热门</li>
          </ul>
        </div>
      </div>
      <ul className="game-lists">
        <li>
          <div className="game-img">
            <img src={require('./img/icon.png')} alt="" />
          </div>
          <p className="game-name">google</p>
          <div className="stars-box">
            <Stars />
          </div>
          <div className="dow-btn">下载apk</div>
        </li>
        <li>
          <div className="game-img">
            <img src={require('./img/icon.png')} alt="" />
          </div>
          <p className="game-name">google</p>
          <div className="stars-box">
            <Stars />
          </div>
          <div className="dow-btn">下载apk</div>
        </li>
        <li>
          <div className="game-img">
            <img src={require('./img/icon.png')} alt="" />
          </div>
          <p className="game-name">google</p>
          <div className="stars-box">
            <Stars />
          </div>
          <div className="dow-btn">下载apk</div>
        </li>
        <li>
          <div className="game-img">
            <img src={require('./img/icon.png')} alt="" />
          </div>
          <p className="game-name">google</p>
          <div className="stars-box">
            <Stars />
          </div>
          <div className="dow-btn">下载apk</div>
        </li>
        <li>
          <div className="game-img">
            <img src={require('./img/icon.png')} alt="" />
          </div>
          <p className="game-name">google</p>
          <div className="stars-box">
            <Stars />
          </div>
          <div className="dow-btn">下载apk</div>
        </li>
      </ul>
    </div>
  );
};

export default GameContent;
