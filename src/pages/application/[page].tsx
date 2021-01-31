import './index.scss';
import React, { useEffect, useRef, useState } from 'react';
import { IGetInitialProps } from 'umi';
import LeftNave from '@/components/leftNve/index';
import TopNav from '@/components/topNav/index';
import GameContent from '@/components/gameContentBox';
import { getCategory } from '@/api/index.js';
import request from '@/service/request';
// import request from 'umi-request';

const ApplicationPage = (props: any) => {
  const { data, match } = props;
  console.log(data, 'props');
  // getCategory()
  // console.log()
  // request.get('https://api.apkking.cc/apkking/apk/get')
  // console.log(request)
  const getData = async () => {
    const res = await getCategory();
    console.log(res, 'res11');
  };
  getData();
  console.log(match);
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

ApplicationPage.getInitialProps = (async (ctx) => {
  // console.log(ctx.match)
  // console.log(process.env,'process.env')
  // const res = await getCategory()
  // console.log(res,'res')
  console.log(getCategory, 'getCategory()');
  getCategory();
  const res = await getCategory();
  console.log(1231111111);
  //  getData()
  return Promise.resolve({
    data: {
      title: 'Hello World',
      res,
    },
  });
}) as IGetInitialProps;

export default ApplicationPage;
