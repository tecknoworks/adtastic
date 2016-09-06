# migration for database creation/editing
class CreateDevices < ActiveRecord::Migration[5.0]
  def change
    create_table :devices do |t|
      t.string :name
      t.integer :rez_x
      t.integer :rez_y

      t.timestamps
    end
  end
end
