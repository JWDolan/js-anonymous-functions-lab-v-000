$(document).ready(function(){
  menu();
  play();
  pause();
  show();
});

var jukeboxSongs = { "taylor swift": "in the clear", "beyonce": "halo", "drake": "hotline bling"};
var artists = Object.keys(jukeboxSongs);
var theArtist = artists[Math.floor(Math.random()) * artists.length];
var songToPlay = jukeboxSongs[theArtist];

function randomNumber() {
  return Math.floor(Math.random());
}

function menu() {
  $('#menu').on('click', handleMenuClick);
}

function handleMenuClick(e) {
  // do stuff, e.g.:

  console.log('#menu was clicked!');
}

function play() {
  $('#play').on('click', function(e) {
    $('#songPlaying').html("now playing " + songToPlay + " by " + theArtist);
    return "now playing " + songToPlay + " by " + theArtist;
  });
}

function pause() {
  $('#pause').on('click', function(e) {
    $('#songPaused').html(songToPlay + " is paused");
  });
}

function show() {
  $('#show').on('click', function(e) {
    var songs = "";
    for (var key in jukeboxSongs) {
      songs += jukeboxSongs[key] + " by " + key +  " is available to play. "
    }
    $('#showSongs').html(songs);
  });
}
