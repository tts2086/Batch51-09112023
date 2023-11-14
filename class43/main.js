//Tariq Batch 510
function make_great(magiciname) {
    // console.log(City1 + 'is in' +Country1 +'\n')
    var GreatMag1 = [];
    for (var i = 0; i < magiciname.length - 1; i++) {
        GreatMag1.push('Great Magician ' + magiciname[i]);
    }
    return GreatMag1;
}
function show_magicians(magiciname) {
    for (var i = 0; i < magiciname.length - 1; i++) {
        // console.log('Magician Name: ' +magiciname[i]+'\n')
        console.log(magiciname[i] + '\n');
    }
}
var magiciname = ['Gryffindor', 'Harry Potter', 'Hermione Granger', 'Fred Weasley', 'Lord Voldemort'];
var GreatMag = make_great(magiciname);
show_magicians(magiciname);
show_magicians(GreatMag);
