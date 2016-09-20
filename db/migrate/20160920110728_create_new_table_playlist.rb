class CreateNewTablePlaylist < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist do |t|
    	t.integer :device_id
    	t.integer :timer
    end
  end
end
