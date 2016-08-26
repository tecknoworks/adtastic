class CreateUpdateTags < ActiveRecord::Migration[5.0]
  def change
    remove_column :photos, :tagID_1
    remove_column :photos, :tagID_2
    remove_column :photos, :tagID_3
    remove_column :videos, :tagID_1
    remove_column :videos, :tagID_2
    remove_column :videos, :tagID_3
    add_column :tags, :photo_id, :integer
    add_column :tags, :video_id, :integer
  end
end
