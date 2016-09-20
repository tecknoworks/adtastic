class CreateNewTablePlaylistitem < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_items do |t|
    	t.integer :content_id
    	t.integer :playlist_id
    end
  end
end
