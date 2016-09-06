# migration for database creation/editing
class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :name
      t.integer :res_x
      t.integer :res_y
      t.text :url
      t.integer :tagID_1
      t.integer :tagID_2
      t.integer :tagID_3

      t.timestamps
    end
  end
end
