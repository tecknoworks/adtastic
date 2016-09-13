json.photo_tags @photo_tags do |photo_tag|
  json.id photo_tag.id
  json.photo_id photo_tag.photo_id
  json.tag_id photo_tag.tag_id
end
