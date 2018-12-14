const expect = require('expect');
const utils=require('./utils');

it('should add two numbers',() =>{
    var res=utils.add(33,11);
    expect(res).toBe(44);
//    expect(res).toBe(44).toBeA("number");
//    if(res !==44){
//            throw new Error(`expected 44 but got ${res}`);
//
//    }
});

it('should async add two numbers',(done)=>{
    utils.asyncAdd(4,3,(sum) =>{
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});





//it('should multiply two numbers',() =>{
//     var res=utils.square(2);
//    expect(res).toBe(4);
////    if(res!=4){
////        throw new Error(`Expected 9 but got ${res}`);
////        throw new Error(`Expected 9 but got ${res}`);
////    }
//});
