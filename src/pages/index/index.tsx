import React, { memo } from 'react';

import GameList from '@/components/gameList/Index';
import TopNav from '@/components/topNav/index';
import Search from '@/components/search/index';

import styles from './index.scss';

const IndexPage = () => {
  window.location.href = `${window.location.origin}/games/game_action/1`;
  return <>{/* <TopNav />
      <Search />
      <GameList></GameList> */}</>;
};

export default IndexPage;
