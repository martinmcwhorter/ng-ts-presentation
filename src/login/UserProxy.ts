import {app} from '../app';
import {UserLogin} from './UserLogin';
import {IHttpService} from 'angular';

export class UserProxy {
    
    static $inject = ['$http'];
    constructor(private $http: IHttpService) {}
    
    login(login: UserLogin) {
        return this.$http.post('/api/login', login);
    }
    
    logout() {
        return this.$http.post('/api/logout', {});
    }
}

app.service('UserProxy', UserProxy);

