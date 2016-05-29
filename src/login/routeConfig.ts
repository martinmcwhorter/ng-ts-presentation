import {app} from '../app';
import {IStateProvider, IUrlRouterProvider} from 'angular-ui-router';

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routeConfig($stateProvider: IStateProvider, 
    $urlRouterProvider: IUrlRouterProvider) {
    
    $stateProvider
        .state('login', {
            url: '/login',
            controller: 'LoginController as ctrl',
            templateUrl: 'login/login.html'
        })
    
    $urlRouterProvider.otherwise('/login');
}

app.config(routeConfig);