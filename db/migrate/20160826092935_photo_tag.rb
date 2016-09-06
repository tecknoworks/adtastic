# migration for database creation/editing
class PhotoTag < ActiveRecord::Migration[5.0]
  def change
    create_table :Photo_Tag do |t|
      t.integer :Photo_id
      t.integer :Tag_id

      t.timestamps
    end
  end
end
