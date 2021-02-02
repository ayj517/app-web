import './index.scss';
import React from 'react';
import TopNav from '@/components/topNav/index';
import Stars from '@/components/stars/index';

import { getCategoryDtailServer } from '@/api/index.js';
import { IGetInitialProps } from 'umi';

const GameDetail = (props: any) => {
  console.log('GameDetail', 111);
  const { detail } = props.data;

  const togo =(item)=>{
    let win;                                        
    win = window.open( 'about:blank','');          
    win.document.write('<script type="text/javascript" >window.location.href="'+item+'" <\/script>');          
  }
  // console.log(detail)
  return (
    <>
      <TopNav />
      <div className="content">
        <div className="game-information">
          <div className="game-img">
            <img src={detail.detail_cover_url} alt="" />
          </div>
          <div className="detal-right">
            <div className="game-tps-1">
              <h1>{detail.apk_name}</h1>
              <span className="game-tips">{detail.detail_title}</span>
            </div>
            <div className="details-sdk">{detail.detail_sdk}</div>
            <div className="star">
              <Stars width={detail.detail_score}/>
              {detail.detail_score}
            </div>
            {detail.download_url} 
            <div className="dow-btn">
              <a target="_blank" onClick={()=>togo(detail.download_url)} >
              {/* href={detail.download_url} */}
                下载 XAPK
              </a>
            </div>
            <div></div>
          </div>
        </div>
        <div className="game-imgs">
          <ul className="game-imgs-list">
            {detail.imgList.map((item: any, index: Number) => {
              return (
                <li key={index}>
                  <img src={item} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="describe">
          <h2>{detail.detail_author}</h2>
          <div className="description">{detail.detail_des}</div>
        </div>
      </div>
    </>
  );
};
GameDetail.getInitialProps = (async (ctx) => {
  const { code } = ctx.match.params;
  const _data = {
    id: code,
  };
  const res = await getCategoryDtailServer(_data);
  // console.log(ctx.match,'ctx.match')
  res.data.imgList = [];
  for (var i in res.data) {
    // console.log(i)
    if (i.indexOf('detail_popup_cover') > -1) {
      res.data.imgList.push(res.data[i]);
    }
    // console.log(i,":",res.data[i]);
  }

  // console.log(games)
  return Promise.resolve({
    data: {
      detail: res.data,
    },
  });
}) as IGetInitialProps;

export default GameDetail;
