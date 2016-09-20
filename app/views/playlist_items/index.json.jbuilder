json.playlists @playlist_items do |playlist_item|
  json.id playlist_items.id
  json.content_id playlist_items.content_id
  json.playlist_id playlist_items.playlist_id
end
