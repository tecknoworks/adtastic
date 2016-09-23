json.contents @contents do |content|
  json.id content.id
  json.name content.name
  json.url content.url
  json.content_type content.content_type
  json.len content.len
end
