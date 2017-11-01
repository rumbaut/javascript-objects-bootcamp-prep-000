var playlist = {
  
};
 function updatePlaylist(playlist, artistName, songTitle){
   Object.assign(playlist, { 'artistName': artistName }, {'songTitle': songTitle});
 }