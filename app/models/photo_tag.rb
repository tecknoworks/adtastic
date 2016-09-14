# model for backend
class PhotoTag < ApplicationRecord
  belongs_to :photo
  belongs_to :tag

  before_destroy :destroy_tags

  private

  def destroy_tags
    tag.destroy
  end
end
