# model for backend
class Tag < ApplicationRecord
  has_many :photo_tags
  has_many :photos, through: :photo_tags

  has_many :video_tags
  has_many :videos, through: :video_tags
end
