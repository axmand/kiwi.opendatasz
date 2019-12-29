require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

//获取深圳通数据
const fetchSztData = function (page, row) {
    let uri = `http://opendata.sz.gov.cn/api/1265279399/1/service.xhtml?page=${page}&rows=${row}&appKey=89d07f081b054b2398617bd13d130fff`;
    return fetch(uri, {
        method: 'GET',
        //body: JSON.stringify({ user: this.state.user, password: this.state.password }), //POST用
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    }).then((res) => {

        //res.json()
        return res;
    });
}

//使用方法：
fetchSztData(1, 8).then(json=>{
    console.log(json);
});