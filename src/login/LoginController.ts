import {app} from '../app';
import {UserProxy} from './UserProxy';
import {UserLogin} from './UserLogin';

export class LoginController {
    
    model = {} as UserLogin;
    
    static $inject = ['UserProxy'];
    constructor(private userProxy: UserProxy) {}
    
    submit(model: UserLogin) {
        if (model.userName && model.password)
            this.userProxy.login(model);
    }
}

app.controller('LoginController', LoginController);