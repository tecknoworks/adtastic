json.playlists @playlists do |playlist|
  json.id playlist.id
  json.device_id playlist.device_id
  json.timer playlist.timer
end
