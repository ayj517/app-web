import React from 'react';
import './index.scss';
import { history } from 'umi';
import Stars from '@/components/stars';

const GameContent = (props) => {
  const { games, appName, more, loding } = props;
  // console.log(games,'123123')
  const gameName = {
    game_action: '动作游戏',
    game_board: '卡牌游戏',
    game_casino: '赌场游戏',
    game_card: '纸牌游戏',
    game_puzzle: '拼图游戏',
    game_casual: '休闲游戏',
    game_strategy: '战略游戏',
    communication: '沟通游戏',
    dating: '约会',
    entertainment: '娱乐',
    shopping: '购物',
    social: '社交',
    tools: '工具',
    video_players: '视频播放',
    music_and_audio: '音乐和视频',
  };
  const goGameDetail = (item) => {
    // console.log(item)
    window.location.href = `${window.location.origin}/gameDetail/${item.id}`;
  };
  return (
    <div className="game-content">
      <div className="title">
        <h3>{gameName[appName]}</h3>
        <div className="slot">
          {/* <span className="name">排序:</span>
          <ul>
            <li>热门</li>`
            <li>热门</li>
            <li>热门</li>
            <li>热门</li>
          </ul> */}
        </div>
      </div>
      <ul className="game-lists">
        {games.map((item, index) => {
          return (
            <li key={index} onClick={() => goGameDetail(item)}>
              <div className="game-img">
                <img src={item.list_cover_url} alt="" />
              </div>
              <p className="game-name">{item.apk_name}</p>
              <div className="stars-box">
                <Stars width={item.detail_score}/> {item.detail_score}
              </div>
              <div className="dow-btn">下载apk</div>
            </li>
          );
        })}
      </ul>
      <div className="more" onClick={more}>
        {loding ? '更多' : '加载中...'}
      </div>
    </div>
  );
};

export default GameContent;
