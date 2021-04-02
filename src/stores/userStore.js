import { observable, configure, action, runInAction, flow, computed, autorun } from 'mobx';
import axios from 'axios';

// 通过配置强制程序使用action函数更改应用程序中的状态
configure({enforceActions: 'observed'});
class UserStore {
    @observable username = '';
    @observable email = '';
    @observable password = '';
    @observable msg = '';
    @action.bound async login () {
        let { data } = await axios.post(
            'https://conduit.productionready.io/api/users/login',
            {    
                email: "jake@jake.com",   
                password: "jake111jake"
            }
        );
       
        console.log(data)
        runInAction(() => this.msg = data);
    }
    @action.bound async resign () {
        let { data } = await axios.post(
            'https://conduit.productionready.io/api/users',
            {user:{   
            username: "Jacob",
                email: "jake@jake.com",
                password: "jakej222ake"
                }
            });
        runInAction(() => this.msg = data);
    }
}

export default UserStore