# migration for database creation/editing
class Dele < ActiveRecord::Migration[5.0]
  def change
    drop_table :photo_tag
    drop_table :video_tag
  end
end
