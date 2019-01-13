import request from './request';

const api = {
    user_login_by_acc: '/api/userLoginByAcc',
    user_login_by_mbl: '/api/userLoginByMbl'
};

const Service = {};

Object.keys(api).forEach((key) => {
    let ar = key.split('_');
    let str = '';
    ar.forEach((w, i) => {
        str += i === 0 ? w : (w.substring(0,1).toUpperCase() + w.substring(1));
    });
    Service[str] = opts => {
        if(opts) {
            opts = {
                method: opts.method || 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(opts)
            }
        }
        request(api[key], opts);
    };
});

export default Service;