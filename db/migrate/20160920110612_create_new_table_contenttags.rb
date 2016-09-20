class CreateNewTableContenttags < ActiveRecord::Migration[5.0]
  def change
    create_table :content_tags do |t|
    	t.integer :content_id
    	t.integer :tag_id
    end
  end
end
