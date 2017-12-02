var fsModule = require('fs');
var colors = require('colors');

var pathFile = "./";
fsModule.readdir(pathFile, function (err, pliki) {
    if (err) throw err;
    console.log(pliki);
    var plikiString = pliki.toString();
    console.log("zamiana tablicy z elementami katalogu na string: \n".red, plikiString);

    fsModule.writeFile('./lista_plików.txt', plikiString, function(err){
    	if (err) throw err;
    	console.log("lista plików w aktualnym folderze zapisana jest w pliku 'lista_plików'".red);
    });
});
