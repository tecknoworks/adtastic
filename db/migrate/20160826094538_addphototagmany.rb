class Addphototagmany < ActiveRecord::Migration[5.0]
  def change
  	create_table :video_tag do|t|
  		t.integer :Video_id
  		t.integer :Tag_id

  		t.timestamps
  	end
  	create_table :photo_tag do|t|
  		t.integer :Photo_id
  		t.integer :Tag_id

  		t.timestamps
  	end
  end
end
