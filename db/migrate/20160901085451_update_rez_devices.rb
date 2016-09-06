# migration for database creation/editing
class UpdateRezDevices < ActiveRecord::Migration[5.0]
  def change
    rename_column :devices, :rez_x, :res_x
    rename_column :devices, :rez_y, :res_y
  end
end
