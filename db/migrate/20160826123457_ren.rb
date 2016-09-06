# migration for database creation/editing
class Ren < ActiveRecord::Migration[5.0]
  def change
    remove_column :photo_tags, :Photo_id
    remove_column :photo_tags, :Tag_id
    remove_column :video_tags, :Video_id
    remove_column :video_tags, :Tag_id
    add_column :photo_tags, :photo_id, :integer
    add_column :photo_tags, :tag_id, :integer
    add_column :video_tags, :video_id, :integer
    add_column :video_tags, :tag_id, :integer
  end
end
