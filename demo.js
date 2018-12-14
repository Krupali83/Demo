console.log("starting demo.js...");
const fs=require('fs');
//const os=require('os');
const _=require('lodash');
const yargs=require('yargs');
const notes=require('./notes.js');

const argv=yargs.argv;

console.log('process', process.argv);
console.log('yargs',argv); 



// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);


// console.log(process.argv);


// var arr=["krupali",1,1];
// console.log(_.uniq(arr));

// var res=notes.addNote();
// console.log(res);

// var user=os.userInfo();
// console.log(user);
// fs.appendFileSync('demo1.txt',`hello ${user.username}! You are ${notes.age}.`);