json.playlists @playlist_items do |playlist_item|
  json.id playlist_item.id
  json.content_id playlist_item.content_id
  json.playlist_id playlist_item.playlist_id
end
