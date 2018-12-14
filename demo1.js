console.log("starting demo1.js...");
const fs=require('fs');
const _=require('lodash');
const yargs=require('yargs');
const notes=require('./notes1.js');

const arg=yargs.argv;
var command=arg._[0];

if(command==="add"){
	notes.addNote(arg.title,arg.body);

}

