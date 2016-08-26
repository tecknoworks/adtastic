class Remove < ActiveRecord::Migration[5.0]
  def change
  	drop_table :Photo_Tag
  	drop_table :Video_Tag
  end
end
