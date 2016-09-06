# migration for database creation/editing
class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.string :name
      t.text :url
      t.integer :tagID_1
      t.integer :tagID_2
      t.integer :tagID_3
      t.time :length

      t.timestamps
    end
  end
end
