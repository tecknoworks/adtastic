class CreateNewTables < ActiveRecord::Migration[5.0]
  def change
    create_table :content do |t|
    	t.string :name
    	t.string :url
    	t.string :type
    end
  end
end
