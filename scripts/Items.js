'use strict';

const Items = (function(){
    const validateName = function(name){
        if(name === undefined || name === ''){
            throw Error('Name Does not Exist')
        }
    }
    const create = function(name){
         return {
             id: cuid(), 
             name: name, 
             checked: false
         };
    }
    
    return {
        validateName,create 
    };
}());
