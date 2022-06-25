import _axios from 'axios';

const axios = baseURL =>{  //念法 =>axios傳入一個baseURL參數，
    const instance = _axios.create({
        baseURL:baseURL || 'http://localhost:3005',  //念法=> axios如果有帶入baseURL的參數的話，就帶入baseURL，沒有的話就默認帶"網址"
        timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
      });
      //這是官方說明文件拿過來的
    return instance;
};
export {axios};  //如果有傳遞參數才傳這個 
export default axios();  //默認導出是不傳遞參數的