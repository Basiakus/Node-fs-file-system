var fsModule = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');
/*
// info about img
fsModule.stat('./fox.jpg', function(err, stats){
	console.log(stats);
	var statMode = new StatMode(stats);
	console.log(statMode.toString());
});

//read/write/append/File

/*
fsModule.readFile('./textFile','utf-8', function(err, data) {
	console.log('dane poniżej przed zapisem, które zostały odczytane bezpośrednio z pliku');
	console.log(data);

	fsModule.appendFile('./textFile', 'Tekst ten został przypisany -> appendFile'.red, function(err) {
	if (err) throw err;
	console.log('Przypisanie'.red);

		fsModule.readFile('./textFile', 'utf-8', function(err, data) {
			console.log('Po wszystkim'.magenta)
			console.log(data)
		});
	});
});
*/
var p = "./";
fsModule.readdir(p, function (err, pliki) {
    if (err) throw err;
    console.log(pliki);
    var plikiString = pliki.toString();
    console.log("zamiana tablicy z elementami katalogu na string: \n".red, plikiString);

    fsModule.writeFile('./new/', plikiString, function(err){
    	if (err) throw err;
    	console.log("lista plików w aktualnym folderze zapisana jest w pliku new".red);
    });
});
