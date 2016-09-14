# model for backend
class Photo < ApplicationRecord
  has_many :photo_tags
  has_many :tags, through: :photo_tags

  before_destroy :destroy_tags

  private

  def destroy_tags
    tags.destroy_all
  end
end
