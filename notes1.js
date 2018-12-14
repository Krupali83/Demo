console.log('starting notes.js');
const fs=require('fs');

var fetchData=()=>{
	try{
		var notesString=fs.readFileSync("json1.json");
		return JSON.parse(notesString);
	}catch(e){
		return [];
	}
}

var putData=(notes)=>{
		fs.writeFileSync("json1.json",JSON.stringify(notes));
}

var addNote = (title,body) => {
	var notes=fetchData();
	var note={
		title,
		body
	};
	

	var duplicate=notes.filter((note)=> note.title===title);

		if(duplicate.length===0)
		{
			notes.push(note);
			putData(notes);
		}
};
module.exports = {
	addNote,
	fetchData,
	putData
};