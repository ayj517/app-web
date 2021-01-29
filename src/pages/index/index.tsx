
import React, { memo } from 'react'

import GameList from "@/components/gameList/Index";
import TopNav from "@/components/topNav/index";
import styles from './index.scss';

const IndexPage = () =>{
  return(
    <>
      <TopNav/>
      <GameList></GameList>
    </>
  )
}

export default IndexPage