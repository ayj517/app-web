import React from 'react';
import './index.scss';
const LeftNav = (props) => {
  const { list, appName } = props;
  console.log(list);

  const games = [
    { name: '动作游戏', code: 'game_action' },
    { name: '卡牌游戏', code: 'game_board' },
    { name: '赌场游戏', code: 'game_casino' },
    { name: '纸牌游戏', code: 'game_card' },
    { name: '拼图游戏', code: 'game_puzzle' },
    { name: '休闲游戏', code: 'game_casual' },
    { name: '战略游戏', code: 'game_strategy' },
    { name: '沟通游戏', code: 'communication' },
    { name: '约会', code: 'dating' },
    { name: '娱乐', code: 'entertainment' },
    { name: '购物', code: 'shopping' },
    { name: '社交', code: 'social' },
    { name: '工具', code: 'tools' },
    { name: '视频播放', code: 'video_players' },
    { name: '音乐和视频', code: 'music_and_audio' },
  ];

  console.log(games.length, '===');
  return (
    <div className="left-nav">
      <h4>分类</h4>
      <div className="menu-ist">
        <div className="menu-title">
          <i className="icon-game"></i>游戏分类
        </div>
        <ul className="menu-list">
          {games.map((item, index) => {
            return (
              <li
                className={[appName == item.code ? 'cur' : '']}
                key={item.code}
              >
                <a href={`/games/${item.code}/1`}>{item.name}</a>
              </li>
            );
          })}
        </ul>
        {/* <div className="menu-title">
          <i className="icon-app"></i>游戏分类
        </div>
        <ul className="menu-list">
          <li>
            <a href="">纸牌游戏</a>
          </li>
          <li>纸牌游戏</li>
          <li>纸牌游戏</li>
          <li>纸牌游戏</li>
          <li>纸牌游戏</li>
          <li>纸牌游戏</li>
          <li>纸牌游戏</li>
          <li>纸牌游戏</li>
        </ul>
        <div className="menu-title">
          <i className="icon-new"></i>游戏分类
        </div>
        <ul className="menu-list">
          <li>
            <a href="">纸牌游戏</a>
          </li>
          <li>纸牌游戏</li>
          <li>纸牌游戏</li>
          <li>纸牌游戏</li>
          <li>纸牌游戏</li>
          <li>纸牌游戏</li>
          <li>纸牌游戏</li>
          <li>纸牌游戏</li>
        </ul> */}
      </div>
    </div>
  );
};

export default LeftNav;
