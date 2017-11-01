var playlist = {
  'algo' : 'enAlgunaParte'
};
 function updatePlaylist(playlist, artistName, songTitle){
   Object.assign(playlist, { artistName : songTitle});
   return playlist;
 }
