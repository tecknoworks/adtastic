# migration for database creation/editing
class UpdateTag < ActiveRecord::Migration[5.0]
  def change
    remove_column :tags, :photo_id
    remove_column :tags, :video_id
  end
end
