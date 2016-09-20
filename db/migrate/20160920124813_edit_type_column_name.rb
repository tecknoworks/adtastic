class EditTypeColumnName < ActiveRecord::Migration[5.0]
  def change
  	rename_column :contents, :type, :content_type
  end
end
