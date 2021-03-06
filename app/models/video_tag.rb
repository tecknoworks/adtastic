# model for backend
class VideoTag < ApplicationRecord
  belongs_to :video
  belongs_to :tag

  before_destroy :destroy_tags

  private

  def destroy_tags
    tag.destroy
  end
end
