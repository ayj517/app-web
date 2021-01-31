import request from '@/service/request';
let URL;
if (process.env.NODE_ENV == 'development') {
  URL = '/api';
} else {
  URL = '';
}
console.log(URL);
// export default gitTest = async (params)=>{
//     return request.get('/api/v1/xxx', {
//         params:params,
//       })
// }

// export default gitsTest = async (params)=>{
//     return request.post('/api/v1/user', {
//         data:params,
//       })
// }

// 获取分类游戏列表
export const getCategoryList = async (params) => {
  const { category, size } = params;
  return request.get(`${URL}/apkking/category/list`, {
    category,
    size,
  });
};

// 获取分类列表
export const getCategory = async (params) => {
  return await request.get(`${URL}/apkking/category_list/get`);
  // request.get('https://api.apkking.cc/apkking/category_list/get')
  // console.log(request ,'request')
};

// 获取apk 详情信息
export const getCategoryDtail = async (params) => {
  const { id } = params;
  const { category, size } = params;
  return request.get(`${URL}/apkking/apk/get`, {
    id,
  });
};
