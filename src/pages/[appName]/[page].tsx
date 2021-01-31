import './index.scss';
import React, { useEffect, useRef, useState } from 'react';
import { IGetInitialProps } from 'umi';
import LeftNave from '@/components/leftNve/index';
import TopNav from '@/components/topNav/index';
import GameContent from '@/components/gameContentBox';
import {
  getCategory,
  getCategoryList,
  getCategoryServer,
  getCategoryListServer,
} from '@/api/index.js';
import request from '@/service/request';
// import request from 'umi-request';

const ApplicationPage = (props: any) => {
  const { data, match } = props;
  const { games } = data;
  const [gameList, setGameList] = useState(games);
  const [isLoding, setIsLoding] = useState(true);
  const [page, setPage] = useState(1);
  const appName = match.params.appName;

  useEffect(() => {
    // getGamePage()

    return () => {};
  }, []);
  const getGamePage = async () => {
    if (!isLoding) return;
    setIsLoding(false);
    const _page = page + 1;
    const _data = {
      category: appName,
      size: _page,
    };

    const _games = await getCategoryList(_data);
    if (_games.data.length == 16) {
      setPage(_page);
      setIsLoding(true);
    }
    setGameList([...gameList, ..._games.data]);
  };
  return (
    <>
      <TopNav />
      <div className="game">
        <LeftNave list={gameList} appName={appName} />
        <GameContent
          appName={appName}
          more={getGamePage}
          loding={isLoding}
          games={gameList}
        />
      </div>
    </>
  );
};

ApplicationPage.getInitialProps = (async (ctx) => {
  const { appName, page } = ctx.match.params;
  const res = await getCategoryServer();
  const _data = {
    category: appName,
    size: page,
  };
  const games = await getCategoryListServer(_data);
  // console.log(games)
  return Promise.resolve({
    data: {
      list: res.data,
      games: games.data,
    },
  });
}) as IGetInitialProps;

export default ApplicationPage;
