json.video_tags @video_tags do |video_tag|
  json.id video_tag.id
  json.video_id video_tag.video_id
  json.tag_id video_tag.tag_id
end
