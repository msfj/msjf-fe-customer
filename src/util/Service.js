import request from './request';

const apisfx = '/api';

const Api = {
    userLoginByMbl: 'get_cust_login/queryOrganInfoList',
    // 企业注册
    inserRegister: 'setRegister/inserRegister'
};

const Service = {};

Object.keys(Api).forEach((key) => {
    // let ar = key.split('_');
    // let str = '';
    const [api_name, method] = Api[key].split('/');
    // ar.forEach((w, i) => {
    //     str += i === 0 ? w : (w.substring(0,1).toUpperCase() + w.substring(1));
    // });
    Service[key] = (opts = {}) => {
        let param = {
            version: opts.version || '1.0.0',
            api_name,
            method,
            state: opts.state || 'oauth',
            timestamp: +new Date(),
            params: JSON.stringify([opts.param || {}])
        };
        
        opts = {
            method: 'POST',
            body: param
        }
        return request(apisfx, opts);
    };
});

export default Service;