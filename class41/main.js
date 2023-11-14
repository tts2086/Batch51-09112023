function show_magicians(magiciname) {
    for (var i = 0; i < magiciname.length - 1; i++) {
        console.log('Magician Name: ' + magiciname[i] + '\n');
    }
}
var magiciname = ['Gryffindor', 'Harry Potter', 'Hermione Granger', 'Fred Weasley', 'Lord Voldemort'];
show_magicians(magiciname);
