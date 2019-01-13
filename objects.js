var playlist = {
  daftPunk:"Digital Love",
};
function updatePlaylist(playlist, name, title){
  playlist[name] = title;
  return playlist
}
function removeFromPlaylist(playlist,artist){
  delete playlist.artist;
}
