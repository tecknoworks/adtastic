class ModifyTableContent < ActiveRecord::Migration[5.0]
  def change
  	drop_table :contents
  end
end
