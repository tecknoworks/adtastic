class Updatetable < ActiveRecord::Migration[5.0]
  def change
  	drop_table :Photos
  	drop_table :Videos
  	drop_table :Photo_Tags
  	drop_table :Video_Tags
  end
end
