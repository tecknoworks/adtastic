class CreateChangeResDevices < ActiveRecord::Migration[5.0]
  def change
    remove_column :devices, :rez_x
    remove_column :devices, :rez_y
    add_column :devices, :res_x, :integer
    add_column :devices, :res_y, :integer
    
  end
end
