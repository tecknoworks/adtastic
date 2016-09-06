# migration for database creation/editing
class VideoTag < ActiveRecord::Migration[5.0]
  def change
    create_table :Video_Tag do |t|
      t.integer :Video_id
      t.integer :Tag_id

      t.timestamps
    end
  end
end
