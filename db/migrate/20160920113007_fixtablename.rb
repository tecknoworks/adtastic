class Fixtablename < ActiveRecord::Migration[5.0]
  def change
  	rename_table :content, :contents
  	rename_table :playlist, :playlists
  end
end
