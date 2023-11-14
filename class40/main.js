function make_album(artistname1, title1, tracks) {
    var Album = { artistname: artistname1,
        title: title1,
        track: tracks
    };
    if (tracks !== "") {
        Album.track = tracks;
    }
    ;
    return Album;
}
var album1 = make_album("Def Leppard", "Hysteria", "31");
console.log(album1);
var album2 = make_album("AC/DC", "Flick of the Switch", "");
console.log(album2);
var album3 = make_album("Michael Jackson", "Black & White", "");
console.log(album3);
/*Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist
name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three
dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
 Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a
  value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number
  of tracks on an album.*/ 
