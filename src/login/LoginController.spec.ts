import {LoginController} from './LoginController';
import {UserProxy} from './UserProxy';
import {mock, IControllerService} from 'angular'

describe('LoginController', () => {
    
    beforeEach(mock.module('app'));
    
    var target: LoginController;
    var userProxySpy: UserProxy;
    
    beforeEach(inject(($controller: IControllerService) => { 
        
        userProxySpy = jasmine.createSpyObj<UserProxy>('UserProxy', ['login']);
        target = $controller<LoginController>('LoginController', {UserProxy: userProxySpy})
    }))
    
    describe('model', () => {
        
        it('should be an object exposed to the view', () => {
           
            expect(target.model).toEqual({});
        })
    })
    
    describe('submit', () => {
        
        it('should call login method on when user and password exist', () => {
            
            target.submit({userName: "foo", password: "bar"});
            
            expect(userProxySpy.login).toHaveBeenCalledWith({userName: "foo", password: "bar"})
        })
    })
})