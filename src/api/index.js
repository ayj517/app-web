import request from '@/service/request';
// import request from 'umi-request';
let URL;
if (process.env.NODE_ENV == 'development') {
  URL = '/api';
} else {
  URL = '';
}

const URL_SERVER = 'https://api.apkking.cc';

// 获取分类游戏列表
// category=<string>&size=<integer>&
export const getCategoryList = async (params) => {
  const { category, size } = params;
  return request.get(
    `${URL}/apkking/category/list?category=${category}&size=${size}&limit=16`,
  );
};

export const getCategoryListServer = async (params) => {
  const { category, size } = params;
  return request.get(
    `${URL_SERVER}/apkking/category/list?category=${category}&size=${size}&limit=16`,
  );
};

// 获取所有游戏分类
export const getCategory = async (params) => {
  return await request.get(`${URL}/apkking/category_list/get`);
};

export const getCategoryServer = async (params) => {
  // return await request.get(`${URL}/apkking/category_list/get`);
  return await request.get('https://api.apkking.cc/apkking/category_list/get');
  // console.log(request ,'request')
};

// 获取apk 详情信息
// export const getCategoryDtail = async (params) => {
//   const { id } = params;
//   return request.get(`${URL}/apkking/apk/get?id=${id}`);
// };
// 获取apk 详情信息
export const getCategoryDtailServer = async (params) => {
  const { id } = params;
  return request.get(`${URL_SERVER}/apkking/apk/get?id=${id}`);
};
