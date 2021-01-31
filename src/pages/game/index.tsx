import './index.scss';
import React from 'react';
import LeftNave from '@/components/leftNve/index';
import TopNav from '@/components/topNav/index';
import GameContent from '@/components/gameContentBox';

const GamePage = () => {
  return (
    <>
      <TopNav />
      <div className="game">
        <LeftNave />
        <GameContent />
      </div>
    </>
  );
};

export default GamePage;
