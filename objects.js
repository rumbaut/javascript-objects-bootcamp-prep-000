var playlist = {
  'algo' : 'enAlgunaParte'
};
 function updatePlaylist(playlist, artistName, songTitle){
   playlist[artistName] = songTitle;
   return playlist;
 }
